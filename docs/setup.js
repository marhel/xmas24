// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
  hash: true,
  tagteam: {
      mandatorygroup: true,
      dateFilter: window.location.hostname != "allt.localhost",
      groups: {
        "ce7eef": {tags: ["dec01"]},
        "a891d3": {tags: ["dec01", "dec02"]},
        "76d5cf": {tags: ["dec01", "dec02", "dec03"]},
        "5d20b0": {tags: ["dec01", "dec02", "dec03", "dec04"]},
        "4b6280": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05"]},
        "20e4e5": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06"]},
        "afd373": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07"]},
        "c62a8d": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08"]},
        "887b31": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09"]},
        "75cf03": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10"]},
        "3e9fbc": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11"]},
        "666ecb": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12"]},
        "34b83e": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13"]},
        "08535b": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14"]},
        "99ce95": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15"]},
        "1d5df2": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16"]},
        "639ecc": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17"]},
        "90d088": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18"]},
        "149890": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19"]},
        "e90352": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20"]},
        "27d556": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21"]},
        "38a824": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21", "dec22"]},
        "0a3295": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21", "dec22", "dec23"]},
        "59aff9": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21", "dec22", "dec23", "dec24"]},
        "tuttifrutti": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21", "dec22", "dec23", "dec24"]}
      }
    },
  dependencies: [{ src: 'assets/reveal.js/plugin/external/external.js', condition: function() { return !!document.querySelector( '[data-external]' ); } } ],
  plugins: [Tagteam],
});