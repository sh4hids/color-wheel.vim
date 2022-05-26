# color-wheel.vim

A JavaScript utility to create `(neo)vim` colorschemes from JSON files. This project is simply a `copy/paste` version of [felipec/vim-felipec](https://github.com/felipec/vim-felipec). I just converted it from Ruby to JavaScript and modified a little to support some extra features.

# Available Themes

- horizon

# Wezterm

To use any `wezterm` colorscheme from `extras/wezterm` folder, you should copy the desired colorscheme from `$HOME/.local/share/nvim/site/pack/packer/start/color-wheel.vim/extras/wezterm/desired_colorscheme.toml` to `$HOME/.config/wezterm/colors/desired_colorscheme.toml`. After that you have to define the colorscheme in your wezterm config (i.e. `color_scheme = 'desired_colorscheme'`).
