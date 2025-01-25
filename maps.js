/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '💣',
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART': '🤍',
  };
  
  const maps = [];  //NIVEL 1//
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`     
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);
  maps.push(`
    O-----XXXX
    XX--X-XXXX
    XX----XXXX
    XXXXX-XXXX
    XX-X---XXX
    XXXX-X-XXX
    XXX-X--XXX
    XX-X-X-XXX
    XX-X---XXX
    XXXXIXXXXX
  `);
  maps.push(`
    X--------I
    XX-XXXXXXX
    XX----XXXX
    XXXXX-XXXX
    XX-XX-XXXX
    XXX-X--XXX
    XXX---XXXX
    XX--XXXXXX
    XXX--XXXXX
    XXXXOXXXXX
  `);
  maps.push(`
    XXX-X-X--O
    XXXXX-X-XX
    XX----X-XX
    XX-XX---XX
    XX-XXX--XX
    X--XXX-XXX
    X-XX--XXXX
    X--XXXXXXX
    XX-----XXX
    I--XXXXXXX
  `);