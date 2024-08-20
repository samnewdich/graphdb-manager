from django.db import models
from rdflib import Graph, URIRef

class Person(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()

    def savegraph(self):
        g = Graph(BLAZEGraph_SETTINGS['repourl'], BLAZEGraph_SETTINGS['namespace'], auth=(BLAZEGraph_SETTINGS['username'], BLAZEGraph_SETTINGS['password']))

        personuri = URIRef(f"{BLAZEGraph_SETTINGS['namespace']}")
        g.add((personuri, self.name))
        g.add((personuri, self.age))

        g.commit()

        super().savegraph()
