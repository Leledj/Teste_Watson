const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const cred = require('../../../app/config/cred');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: cred.apikey,
  }),
  url: cred.url,
});

var params = {
    text: '',
    voice: 'pt-BR_IsabelaVoice',
};

$("#btn-ouvir").Click(function(event){
    textToSpeech.synthesize({
        text: 'Ola, boa tarde!',
        voice: 'pt-BR_IsabelaVoice',
    }).on('error', function(error){
        console.log('Error:',error);
    })
});