const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const fs = require ('fs');
const cred = require('../../../app/config/cred');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: cred.apikey,
  }),
  url: cred.url,
});

var params = {
    text: 'Hello world',
    voice: 'pt-BR_IsabelaVoice',
};

const synthesizeParams = {
  text: 'Hello world',
  accept: 'audio/wav',
  voice: 'en-US_AllisonV3Voice',
};

document.querySelector('#btn-ouvir').onclick = function() {
  textToSpeech.synthesize(synthesizeParams)
  .then(response => {
    // only necessary for wav formats,
    // otherwise `response.result` can be directly piped to a file
    return textToSpeech.repairWavHeaderStream(response.result);
  })
  .then(buffer => {
    fs.writeFileSync('hello_world.wav', buffer);
  })
  .catch(err => {
    console.log('error:', err);
  });
};