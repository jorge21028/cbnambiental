source "https://rubygems.org"

# GitHub Pages gem: bloquea las versiones exactas que usa GitHub Pages en producción
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate-v2"
end

# Windows / JRuby (no requerido en GitHub Pages, pero evita errores locales)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]
