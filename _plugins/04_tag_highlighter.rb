# _plugins/04_tag_highlighter.rb
require "jekyll"

Jekyll::Hooks.register :documents, :pre_render do |doc|
  doc.content.gsub!(/(?<!\w)#(?![A-Fa-f0-9]{6,8}\b)([a-zA-Z0-9_]+)/) do
    tag = Regexp.last_match(1)
    %Q{<span class="hashtag">##{tag}</span>}
  end
end
