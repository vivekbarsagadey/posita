

var p = NAMESPACE.resource(101);
var q = NAMESPACE.resource(102);
var r = NAMESPACE.resource(103);

// Checking for Resource Ids.
QUnit.test( "Checking for Resource Ids", function( assert ) {
    assert.ok(p.getId() == 101, "Result : P Passed!" );
    assert.ok(q.getId() == 102, "Result : Q Passed!" );
    assert.ok(r.getId() == 103, "Result : R Passed!" );
});

// Accessing Expensive resources.

QUnit.test( "Accessing Expensive resources", function( assert ) {
    assert.ok(p.getExpensiveResource().value == "I'm a very expensive resource associated with ID 101", "Result : P Passed!" );
    assert.ok(q.getExpensiveResource().value == "I'm a very expensive resource associated with ID 102", "Result : q Passed!" );
    assert.ok(r.getExpensiveResource().value == "I'm a very expensive resource associated with ID 103", "Result : r Passed!" );

});

// After Close operations

QUnit.test( "After Close operations: Checking for Resource Ids", function( assert ) {
    p.close();
    assert.ok(p.getExpensiveResource().value =="Resource associated with ID 101 is already closed", "Result : P Passed!" );
    assert.ok(q.getExpensiveResource().value =="I'm a very expensive resource associated with ID 102", "Result : q Passed!");
});