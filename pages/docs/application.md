Application
=

Implementation
-

By default, the framework uses the `Container` class of `illuminate/container`
to implement a IoC container.

The Application class is then derived from the `Container` class to inherit
all functionality it requires.

You can bind classes to the container in `app/bindings.php`.

For more information on the `Container` class, please read the
[IoC Container documentation page](http://four.laravel.com/docs/ioc).

Usage
-

### Interacting with Application

We can interact with Application in `app/bindings.php` and perform any
IoC bindings that we require using either `App` or `$app`.

### Example

**The Class**

Say that we have the class `X` that takes a `XCollection` object on construct:

	<?php

	class X
	{
		function __construct(XCollection $x)
		{
			// ...
		}

		// ...
	}

**Instantiating the Class**

We can create an instance of X now through the container if X and
XCollection is accessible:

	App::make('X');

This approach however will create a new XCollection and pass it to the
object.

**Binding a Class**

If we want to bind a specific XCollection that has been constructed earlier,
we can do the following:

	$collection = new XCollection(...);
	App::bind('XCollection', $collection);

	// OR

	App::bind('XCollection', App::share(function($app)
	{
		return new XCollection(...);
	}));