// Minimal Prism language definition for TDL (Tally Definition Language)
(function(Prism) {
  Prism.languages.tdl = {
    'comment': [
      { pattern: /;;.*/m } // line comments
    ],
    'keyword': /\b(Definition|Object|Collection|Report|Form|Part|Line|Field|Variable|Key|Button|Action|Set|Add|Use|Title|Use as|Type|Name|Format|Align|Style|Color|Local|Repeat|Table|Default|Border|Option|Explode|TopPart|BottomPart|SubTitle|Width|Height|Invisible|Skip|Space)\b/i,
    'boolean': /\b(Yes|No|True|False)\b/i,
    'number': /\b-?(?:\d+)(?:\.\d+)?\b/,
    'string': {
      pattern: /"[^"]*"|'[^']*'/,
      greedy: true
    },
    'operator': /[:\-+*/=]/,
    'punctuation': /[\[\]#.,]/,
    'property': /\b(Parent|Currency|Opening Balance|Method|Format|Title|Columns|Lines|PickList|Border)\b/i,
    'entity': {
      // bracketed block headers e.g. [Report: MyReport]
      pattern: /\[(?:Report|Form|Part|Line|Field|Collection|Object|Variable|Key|Button)\s*:\s*[^\]]+\]/i,
      inside: {
        'punctuation': /[\[\]:]/,
        'keyword': /\b(Report|Form|Part|Line|Field|Collection|Object|Variable|Key|Button)\b/i
      }
    }
  };
})(Prism);

