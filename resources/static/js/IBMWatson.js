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
    text: 'Hello world',
    voice: 'pt-BR_IsabelaVoice',
};


$(document).ready(function(){
    $('#btn-ouvir').Click(function(event){
        textToSpeech.synthesize(params).catch(err => {
            console.log('Error:',error);
        })
    })
})