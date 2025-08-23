# _plugins/auto_collections_and_categories.rb
require "jekyll"

module AutoCollection
  # 1) Detect collections and derive categories
  Jekyll::Hooks.register :site, :after_reset do |site|
    site.config["collections"] ||= {}
    categories = []
    collection_names = []

    # Scan your yuu_academy/* collections
    Dir.glob(File.join(site.source, "yuu_academy/_*")).each do |folder|
      next unless File.directory?(folder)

      name = File.basename(folder).sub(/^_/, "")
      # Ensure collection is configured
      site.config["collections"][name] ||= {
        "output"    => true,
        "permalink" => "/:collection/:path/"
      }

      # Category = first token before "_"
      category_key = name.split("_").first
      collection_names << name
      categories << category_key
    end

    site.config["auto_categories"] = categories.uniq
    site.config["collection_names"] = collection_names.uniq

    Jekyll.logger.info "Auto-collections loaded:", site.config["collections"].keys.join(", ")
    Jekyll.logger.info "Auto-categories loaded:", site.config["auto_categories"].join(", ")
  end

  # 2) Generate one page per category discovered above
  class CollectionPageGenerator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      collection_names = site.config["collection_names"] || []
      if collection_names.empty?
        Jekyll.logger.warn "CollectionPageGenerator:", "No auto_categories found. Skipping."
        return
      end

      collection_names.each do |slug|
        site.pages << CategoryPage.new(site, site.source, slug)
      end

      Jekyll.logger.info "CollectionPageGenerator:", "Generated #{collection_names.size} category page(s)."
    end
  end

  # Category page model
  class CategoryPage < Jekyll::Page
    def initialize(site, base, slug)
      @site = site
      @base = base
      @dir  = "categories"
      @name = "#{slug}.html"

      process(@name)

      # Optional: pretty names/descriptions via _data/category_meta.yml
      # Example file:
      # aws:
      #   name: AWS
      #   description: "All AWS-related collections"
      meta = (site.data.dig("category_meta", slug) rescue nil) || {}
      display_name = meta["name"] || slug.split(/[-_]/).map(&:capitalize).join(" ")
      description  = meta["description"] || "All collections under #{display_name}"

      # Find collections that belong to this category (prefix match: "#{slug}_")
      collections_for_category =
        (site.config["collections"] || {}).keys.select { |k| k.start_with?("#{slug}_") }.sort

      self.data = {
        "layout" => "default",
        "title"  => display_name,
        "permalink" => slug,  # change to "/categories/#{slug}/" if you prefer
        "category"  => slug,
        "description" => description,
        "collections_in_category" => collections_for_category
      }

      # Pass both the category and the list of collections to your include
      self.content = <<~LIQUID
        {% include collection-list.html category=page.category collections=page.collections_in_category %}
      LIQUID

      Jekyll.logger.debug "CategoryPage:", "Built categories/#{@name} (#{collections_for_category.size} collections)"
    end
  end
end
