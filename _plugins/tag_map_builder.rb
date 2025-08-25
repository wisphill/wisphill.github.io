# _plugins/tag_map_builder.rb
require "jekyll"
require "json"

module Jekyll
  class TagMapFile < StaticFile
    def initialize(site, content, dir, name)
      @content = content
      super(site, site.source, dir, name)
    end

    # Override write so we can create the file dynamically
    def write(dest)
      dest_path = destination(dest)
      FileUtils.mkdir_p(File.dirname(dest_path))
      File.write(dest_path, @content)
      true
    end
  end

  class TagMapBuilder < Generator
    safe false
    priority :low

    def generate(site)
      # Build the tag map
      tag_map = Hash.new { |h, k| h[k] = [] }

      site.collections.each_value do |collection|
        collection.docs.each do |doc|
          content = doc.content
          tags = content.scan(/(?<!\w)#(?![A-Fa-f0-9]{6,8}\b)([a-zA-Z0-9_]+)/).flatten.uniq
          tags.each { |tag| tag_map[tag] << doc }
        end
      end

      site.data["tag_map"] = tag_map

      export_map = tag_map.transform_values { |docs| docs.map { |doc| doc.relative_path.sub(/^_/, "").sub(/\.md$/, "") } }
      json_content = JSON.pretty_generate(export_map)

      # Register tag_map.json as a StaticFile so Jekyll copies it to _site/assets/
      site.static_files << TagMapFile.new(site, json_content, "assets", "tag_map.json")

      Jekyll.logger.info "TagMapBuilder:", "tag_map.json registered for export (#{tag_map.keys.size} tags)"
    end
  end
end
