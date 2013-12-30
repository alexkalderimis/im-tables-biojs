(function main (B) {
  var table = new B.InterMine.Table({
    target: "table-container",
    url: "http://www.flymine.org/query",
    query: {
      from: 'Organism',
      select: ['commonName', 'name', 'taxonId']
    }
  });
  window.demoTable = table;
  table.onQueryChanged(function (query) {
    console.log("Query is now: " + query.toXML());
  });
  table.addListener('imo:click', function (type, id) {
    console.log("User clicked on " + type + " " + id);
  });
  table.onAllEvents(function (eventName, arg0) {
    console.log("Received event " + eventName + ". First arg: " + arg0);
  });
})(window.Biojs);
