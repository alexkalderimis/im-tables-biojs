(function main (B) {
  var disease = {
    from: "Disease",
    select: [
      "genes.homologues.homologue.pathways.genes.*",
      "genes.homologues.homologue.pathways.genes.goAnnotation.ontologyTerm.name"
  ],
    where: {
      "name": "Alzheimer*",
      "genes.organism.name": "Homo sapiens",
      "genes.homologues.homologue.organism.name": "Drosophila melanogaster"
    }
  };
  var table = new B.InterMineTable({
    target: "table-container",
    url: "http://www.flymine.org/query",
    query: disease
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
