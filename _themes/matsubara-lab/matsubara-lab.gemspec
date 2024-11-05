# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "matsubara-lab"
  spec.version       = "1.0.0"
  spec.authors       = ["Exsight, Inc."]
  spec.email         = ["developer@exsight.co.jp"]

  spec.summary       = "Jekyll theme for Hokkaido University Matsubara Lab."
  spec.homepage      = ""
  spec.license       = ""

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.10"

  spec.required_ruby_version = ">= 3.3.0"
end
