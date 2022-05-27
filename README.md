# color-wheel.vim

A JavaScript utility to create `(neo)vim` colorschemes from JSON files. This project is simply a `copy/paste` version of [felipec/vim-felipec](https://github.com/felipec/vim-felipec). I just converted it from Ruby to JavaScript and modified a little to support some extra features.

## Usage

- ### With `Packer.nvim`

Add this in your packer startup config and run `PackerInstall`:

```lua
use('sh4hids/color-wheel.vim')
```

Add this in your `init.lua` file:

```lua
local colorscheme = 'horizon'

local status_ok, _ = pcall(vim.cmd, 'colorscheme ' .. colorscheme)
if not status_ok then
  vim.notify('colorscheme ' .. colorscheme .. ' not found!')
  return
end
```

## Contributing

- Clone the repo `git clone git@github.com:sh4hids/color-wheel.vim.git`
- Run `npm i`
- Create a new branch
- Copy an existing theme from `src/themes` and refactor as your need
- Run `npm run build`
- Push your changes to git and create a pull request

## Available Themes

- horizon

## Wezterm Theme

- #### With `packer.nvim`

To use any `wezterm` colorscheme from `extras/wezterm` folder, you should copy the desired colorscheme from `$HOME/.local/share/nvim/site/pack/packer/start/color-wheel.vim/extras/wezterm/desired_colorscheme.toml` to `$HOME/.config/wezterm/colors/desired_colorscheme.toml`. After that you have to define the colorscheme in your wezterm config (i.e. `color_scheme = 'desired_colorscheme'`).
