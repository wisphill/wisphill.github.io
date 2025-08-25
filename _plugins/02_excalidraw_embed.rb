# _plugins/auto_collections_and_categories.rb
Jekyll::Hooks.register :site, :after_reset do |site|
  puts "[ExcalidrawEmbed] Registering hooks for collections: #{site.config['collections'].keys.join(', ')}"
  collections = site.config["collections"].keys.map(&:to_sym)
  collections.each do |coll|
    Jekyll::Hooks.register coll, :pre_render do |doc|
      doc.content.gsub!(/!\[\[(.+?\.excalidraw)\s*(?:\|\s*(\d+))?\s*\]\]/) do
        filename = Regexp.last_match(1).strip
        width = Regexp.last_match(2)
        style = width ? "style=\"max-width: #{width}px;\"" : ""
        <<~HTML
          <div class="excalidraw-canvas-wrapper" data-excalidraw="#{filename}" #{style}>
          </div>
        HTML
      end
    end
  end
  puts "[ExcalidrawEmbed] Finished processing documents"
end
