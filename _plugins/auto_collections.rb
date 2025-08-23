# _plugins/auto_collections.rb
Jekyll::Hooks.register :site, :after_reset do |site|
  Dir.glob("yuu_academy/_*").each do |folder|
    next unless File.directory?(folder)

    name = File.basename(folder).sub(/^_/, "")

    site.config["collections"][name] ||= {
      "output"    => true,
      "permalink" => "/:collection/:path/"
    }
  end

  puts "Auto-collections loaded: #{site.config["collections"].keys}"
end
