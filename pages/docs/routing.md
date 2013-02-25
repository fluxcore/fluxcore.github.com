Routing
=

Implementation
-

By default, the framework uses the Router class of `fluxcore/components`
to implement page routing.

Route resolving and output is done in `app/resolve.php` and this
can obviously be modified to your own preference.

All routes are and should be defined in `app/routes.php`.

Usage
-

### Basic Routing

To define a basic route that accepts no input parameters, define the
route as following in `app/routes.php`.

	// Route::add($path, $method, Closure $handler);
	Route::add('/path/', 'get', function() {
		return 'Output';
	});

Alternatively using the `__call` shorthand.

	// Route::{method}($path, Closure $handler);
	Route::get('/path/', function() {
		return 'Output';
	});

_Note: The shorthand is just a wrapper of the add method._

### Advanced Routing

To define a more advanced route that accepts targeted input
parameters, define the route as following in `app/routes.php`.

	Route::get('/path/:alpha/:int/', function($username, $age) {
		return "Username: $username - Age: $age";
	});

When this route is resolved, the handler will be invoked with the
specified input parameters **in order**.

The input types that are provided by default are:

 * **:int** - _Integer (0-9)_
 * **:string** - _String (a-z, A-Z)_
 * **:alpha** - _Alphanumeric (a-z, A-Z, 0-9)_