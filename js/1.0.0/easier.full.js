(function(window){
  // You can enable the strict mode commenting the following line  
  'use strict';


  // This function will contain all our code
  function Easierr{
    var _EaiserObject = {};

    // This variable will be inaccessible to the user, only can be visible in the scope of your library.
    var settings = {
      volume:100,
      mute:false
    };
    

    // Change a private property
    _EasierObject.setVolume = function(volume){
         settings.volume = volume;
         return volume;
    };
    
    // Change a private property
    _EasierObject.setMute = function(muteStatus){
         if(typeof(muteStatus) === 'boolean'){
           settings.mute = muteStatus;
         }else{
           console.error("You need to disable or enable the sound !");
         }

         return settings.mute;
    };
    
    // Change a private property
    _EasierObject.haveSound = function(){
         return settings.mute;
    };

    return _EasierObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.Easier === 'undefined'){
    window.Easier = Easierr();
  }
})(window); // We send the window variable withing our function


// Now see the content of your library
console.log(Easier);

// It should ouput only 3 properties (setMute, setVolume, haveSound)
// And the settings variable can be only be accessed in your library, not outside
