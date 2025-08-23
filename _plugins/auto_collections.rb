# _plugins/auto_collections.rb
Jekyll::Hooks.register :site, :after_reset do |site|
  categories = []
  Dir.glob("yuu_academy/_*").each do |folder|
    next unless File.directory?(folder)

    name = File.basename(folder).sub(/^_/, "")

    site.config["collections"][name] ||= {
      "output"    => true,
      "permalink" => "/:collection/:path/"
    }

    # extract the first word (split by "_")
    category_key = name.split("_").first
    categories << category_key
  end

  # keep only unique categories
  site.config["auto_categories"] = categories.uniq

  puts "Auto-collections loaded: #{site.config["collections"].keys}"
  puts "Auto-categories loaded: #{site.config["auto_categories"]}"
end
