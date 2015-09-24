/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

// Vivek : Commented this if condition because it will fail and not a correct way to check NULL.
/*
if (NAMESPACE == null
        || typeof (NAMESPACE) == 'undefined') {
    NAMESPACE = {}; */

	
// Vivek :  This is a better way.
var NAMESPACE= NAMESPACE || {};

// Vivek :  checking if resource method is already defined. If not, exit.
if(!NAMESPACE.resource){
	
	// Vivek :  Defining _all_ids outside of resource block.
	NAMESPACE._all_ids =  new Array();
	// Creates an object that allocates a new or references an
    // existing very expensive resource associated with `id`
    var resource = function (id) {
        // Private data
		// Vivek : Moved this variable to Namespace level (line-22).
        //var _all_ids = new Array();
		
		// Vivek : moved this to persona level. line-38
        //var _closed = false;
		
        var _id = id;
        var _expensive_resource = null;

        // Public data
        var persona = {
			_closed : false
        };

        // Public methods
        var getExpensiveResource = function () {
			// Vivek : Check if resource is already closed or not.
			if(this._closed){
				 _expensive_resource = {
                    value: "Resource associated with ID " + id + " is already closed"
                };
			}
            return _expensive_resource;
        }
        
        persona.getExpensiveResource = getExpensiveResource;

        var getId = function () {
            return _id;
        }
        
        persona.getId = getId;

        var close = function () {
			//  Vivek : Check for resource close.
			if(this._closed){
				console.log("Resource associated with ID " + this.getId() + " is already closed")
			}else{
				delete NAMESPACE._all_ids[_id];
				this._closed = true;
			}
			
        }

        persona.close = close;
        
        // Private methods
        function _lookupOrCreateExpensiveResourceById(id) {
			_expensive_resource = NAMESPACE._all_ids[id];
            //change for null and false value
            if (!_expensive_resource) {
                // Just pretend for the sake of this example
                _expensive_resource = {
                    value: "I'm a very expensive resource associated with ID " + id
                };

                NAMESPACE._all_ids[id] = _expensive_resource;
            }
            
            return _expensive_resource;
        }
        
        // Initialization
        _expensive_resource = _lookupOrCreateExpensiveResourceById(id);
        
        return persona;
    }

   NAMESPACE.resource = resource;
}

