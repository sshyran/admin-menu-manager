module.exports = {
	header:   {
		src:          [ '<%= package.name %>.php' ],
		overwrite:    true,
		replacements: [ {
			from: /\* Version:(\s*?)[\w.-]+$/m,
			to:   '* Version:$1<%= package.version %>'
		} ]
	},
	plugin:   {
		src:          [ 'classes/class-admin-menu-manager.php' ],
		overwrite:    true,
		replacements: [
			{
				from: /^(\s*?)const(\s+?)VERSION(\s*?)=(\s+?)'[^']+';/m,
				to:   "$1const$2VERSION$3=$4'<%= package.version %>';"
			}
		]
	},
	composer: {
		src:          [ 'composer.json' ],
		overwrite:    true,
		replacements: [ // "version": "1.0.0",
			{
				from: /^(\s*?)"version":(\s*?)"[^"]+",/m,
				to:   '$1"version":$2"<%= package.version %>",'
			}
		]
	}
};
