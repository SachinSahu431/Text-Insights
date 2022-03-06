# [Text-Insights](https://sachinsahu431.github.io/Text-Insights/)

![](https://github.com/SachinSahu431/Text-Insights/blob/main/src/components/screenShots/welcome.png)

Project is currently hosted on GitHub pages and can be accessed from [here](https://sachinsahu431.github.io/Text-Insights/).

## About

'Text Insights' is a collection of useful text processing utilities. Each of the text tools works right in your browser and is easy to use.\
There is only one process for using all utilities - to load the text and get the results!

## Features 

The features listed below are currently available:

  - __Uppercase-Lowercase Converter__
    - With this tool, you can convert all letters of input text, regardless of their initial case, into uppercase or lowercase.
    - I have implemented the functions `.toUpperCase()` and `.toLowerCase()` here to accomplish this.

  - __BASE64 Encoding and Decoding__
    - Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with ASCII.
    - Function `btoa()` is used for encoding to Base64. And `atob()` function is used for decoding Base64.

  - __Text-to-Speech__
    - Text-to-speech (TTS) aka “Read Aloud” technology reads aloud digital text — the words on computers, smartphones, and tablets.\
TTS can help people who struggle with reading.
    - Web Speech API is used to add speech synthesis to JavaScript.
    - The `SpeechSynthesisUtterance` interface of this API represents a speech request:
      ``` 
      var msg = new SpeechSynthesisUtterance(text)
      ```
      
    - SpeechSynthesis interface is used for controlling a text-to-speech output:
    
      ``` 
      window.speechSynthesis.speak(msg)
      ```
  - __Text Summary__ 
    - This feature provides information like Word & Character Count, approx Reading Time, and Preview.

![](https://github.com/SachinSahu431/Text-Insights/blob/main/src/components/screenShots/gif1.gif)
![](https://github.com/SachinSahu431/Text-Insights/blob/main/src/components/screenShots/gif2.gif)

## Other Features 

Other features include: 

  - `Dynamic Routing` using [React Router DOM](https://www.npmjs.com/package/react-router-dom)
  - `Dark Mode`

![](https://github.com/SachinSahu431/Text-Insights/blob/main/src/components/screenShots/one.png)
