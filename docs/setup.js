// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
  hash: true,
  tagteam: {
      mandatorygroup: true,
      dateFilter: window.location.hostname != "allt.localhost",
      groups: {
        "dd9752": {tags: ["dec01"]},
        "f5b5cc": {tags: ["dec02"]},
        "a4c231": {tags: ["dec03"]},
        "7de074": {tags: ["dec04"]},
        "30a9db": {tags: ["dec05"]},
        "4e21f0": {tags: ["dec06"]},
        "08aad9": {tags: ["dec07"]},
        "4a311a": {tags: ["dec08"]},
        "e404d0": {tags: ["dec09"]},
        "da407b": {tags: ["dec10"]},
        "e77e1a": {tags: ["dec11"]},
        "23f76e": {tags: ["dec12"]},
        "7ee754": {tags: ["dec13"]},
        "0248d2": {tags: ["dec14"]},
        "5cd24d": {tags: ["dec15"]},
        "5f07ee": {tags: ["dec16"]},
        "25f4e4": {tags: ["dec17"]},
        "d94965": {tags: ["dec18"]},
        "a03784": {tags: ["dec19"]},
        "8c1100": {tags: ["dec20"]},
        "571640": {tags: ["dec21"]},
        "92ac0a": {tags: ["dec22"]},
        "914c3e": {tags: ["dec23"]},
        "5779fb": {tags: ["dec24"]},
        "tuttifrutti": {tags: ["dec24"]}
      }
    },
  dependencies: [{ src: 'assets/reveal.js/plugin/external/external.js', condition: function() { return !!document.querySelector( '[data-external]' ); } } ],
  plugins: [Tagteam, RevealZoom],
});