Models
=

Implementation
-

By default, the framework implements `illuminate/database` as database
backend and uses the `Eloquent ORM` to provide a Model interface.  
You can read the documentation of Eloquent at the [Eloquent ORM documentation page](http://four.laravel.com/docs/eloquent).

Usage
-

To create a Model, you need to define the model in `app/model/`.  
This path is added to the ClassLoader so everything in there will loaded according
to the PSR-0 standard.

When defining a model, make sure it inherits from the Model class as by
default it is an alias to the `Eloquent` model base class.

### In-depth Example

	<?php

	class User extends Model
	{
		protected $table = 'users';
	}

 1. We have created the file `app/model/User.php` and put the above code
    inside it.
 2. The model is now ready to use, see the example below.

*Example*

	<?php

	// Selects all users.
	$users = User::all();

	// Selects a user by PK.
	$user = User::find(0);

_For further Eloquent usage information, read the
[Eloquent ORM documentation](http://four.laravel.com/docs/eloquent)._