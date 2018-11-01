import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list: any = [];
  i: any = 0;
  itemsTopush = [
    {
      "content": "This app plays audios. It is best to use it with earphones.\nIf you need to turn down the sound, use the volume control on your phone"
    },
    {
      "content": "I’ll be much better at helping you if you can give me your full attention, so please talk to me when you’re in a quiet place with no distractions. Please make sure other people can’t hear, because you may sometimes talk about things you want to keep private."
    },
    {
      "content": "Great"
    },
    {
      "content": "The first time you use the app, I’ll help you work out what you want to change and why you want to do it. In a second part, you’ll strengthen your confidence in making a change. When you’re ready to start working on your goal, I’ll help you plan your first steps. Later, I’ll give you as much support as you want, to help you keep going towards your goal."
    }];
  constructor(public navCtrl: NavController,
    private tts: TextToSpeech,
    public platform: Platform) {
    this.list = [
      {
        "content": "Hi. I’m Fitz. I’ll be helping you think about making a change to make your life better. If you decide to change, I’ll also help you get started, and keep going so you reach your goal. I’m not a real person and I can’t answer questions yet, but I’ll be your coach if you decide to make a change.",
      }
    ];
    platform.ready().then(() => {
      this.readtext(this.list[0].content);
    })
  }

  readtext(text) {
    console.log(text);
    var options = {
      'text': text,
      'locale': 'en-US',
      'rate':1.3
    };

    this.tts.speak(options)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  stopPlayback() {
    this.tts.stop();
  }

  nextItem() {
    this.stopPlayback();
    this.list.push(this.itemsTopush[this.i]);
    this.readtext(this.itemsTopush[this.i].content);
    this.i += 1;
  }
}
