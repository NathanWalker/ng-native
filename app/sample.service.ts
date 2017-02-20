import { Injectable } from '@angular/core';
import { isIOS } from 'platform';

// audio plugins
var TNSEZRecorder, TNSEZAudioPlayer, AudioPlot, TNSPlayer, TNSRecorder;
if (isIOS) {
  var ezAudio = require('nativescript-ezaudio');
  TNSEZRecorder = ezAudio.TNSEZRecorder;
  TNSEZAudioPlayer = ezAudio.TNSEZAudioPlayer;
  AudioPlot = ezAudio.AudioPlot;
} else {
  var audio = require('nativescript-audio');
  TNSRecorder = audio.TNSRecorder;
  TNSPlayer = audio.TNSPlayer;
}

@Injectable() 
export class SampleService {

}