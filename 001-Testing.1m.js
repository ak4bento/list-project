#!/usr/bin/env /usr/local/bin/node 

// Metadata allows your plugin to show up in the app, and website.
// #
// <xbar.title>Testing</xbar.title>
// <xbar.version>v1.0</xbar.version>
// <xbar.author>Your Name, Another author name</xbar.author>
// <xbar.author.github>your-github-username,another-github-username</xbar.author.github>
// <xbar.desc>Short description of what your plugin does.</xbar.desc>
// <xbar.image>http://www.hosted-somewhere/pluginimage</xbar.image>
// <xbar.dependencies>python,ruby,node</xbar.dependencies>
// <xbar.abouturl>http://url-to-about.com/</xbar.abouturl>

// Variables become preferences in the app:
// #
// <xbar.var>string(VAR_NAME="Mat Ryer"): Your name.</xbar.var>
// <xbar.var>number(VAR_COUNTER=1): A counter.</xbar.var>
// <xbar.var>boolean(VAR_VERBOSE=true): Whether to be verbose or not.</xbar.var>
// <xbar.var>select(VAR_STYLE="normal"): Which style to use. [small, normal, big]</xbar.var>
import xbar, {separator, isDarkMode} from '@sindresorhus/xbar';

xbar([
	{
		text: 'Project',
		color: isDarkMode ? 'white' : 'black',
		dropdown: false
	},
	separator,
	{
		text: 'Laravel',
		submenu: [
			{
				text: 'Arfeen',
				href: 'http://arfeen.loc/'
			},
			{
				text: 'Sejawat',
				href: 'http://sejawat.loc/'
			},
			{
				text: 'Sejawat Kampus',
				href: 'http://campus.loc/'
			},
			{
				text: 'Canvas',
				href: 'http://canvas.loc/'
			},
		]
	},
	separator,
	{
		text: 'JavaScript',
		submenu: [
			'Nothing'
		]
	},
]);