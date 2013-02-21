Configuration
=

Implementation
-

By default, the framework uses the `ConfigManager(Alias: Config)` class of `fluxcore/components` to
implement a configuration interface.

Configuration files are created in `app/config/` and are accessed through `Config::get(...)`.

Usage
-

### Defining our Configuration

Here we will define our own brand-new Configuration file.

	<?php

	return array(
		'key1' => 'val1',
		'key2' => 'val2',
	);

 1. We create the file `app/config/example.php` and define it like above.
 2. We will now be able to access key1 in example using `example.key1`.

_Note: If you have your configuration nested in a folder you can access it as follows:_

	dir/example.key1 OR
	dir.example.key1

### Accessing our Configuration

We can access the data we defined in the Configuration file as follows:

	// Config::get($abstract, $default = null);
	Config::get('dir.example.key1', 'default'); // val1
	Config::get('dir.example.key2', 'default'); // val2
	Config::get('dir.example.key3', 'default'); // default

`Config::get(...)` returns the Configuration entry if $abstract is found, otherwise it will
return whatever is passed as $default.

### ArrayAccess

`Configuration` implements the ArrayAccess interface which means that you can interface with it
like an array.

	$app['config']['dir.example.key1']; // val1
	$app['config']['dir.example.key2']; // val2
	$app['config']['dir.example.key3']; // null

_Note: For more on $app and Application, see [Application](#/docs/application)._