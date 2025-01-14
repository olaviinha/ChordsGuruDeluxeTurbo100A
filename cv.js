
// Defaults
let humanization = 60;          // Each note starts to play within this many milliseconds.
let bpm = 120;                  // Default BPM.
let loop_bar = 1;               // Default count how many times each chord plays/repeats when Play active.
let default_octave = 3;         // Default octave.
let default_fadeout = 300;      // Default fadeout (swing easing) time (ms) of the previous chord when you play a new chord.
let autocomplete = true;        // Autocomplete chords.
let mobile = 768;               // Breakpoint for 1 col.
let large_screen = 1800;        // Breakpoint for 3 cols.
let include_inversions = false; // Include inversion per chord in chords input field.
let display_all_notes = false;  // Display all notes in keys when hovering a kb long enough.
let generate_midi_url = 'https://chords2midi.herokuapp.com/'; // Rest API for midi exportation

// Instrument paths (Any URL or directory paths that contain C3.mp3, Db3.mp3, etc.)
let instruments = [
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/acoustic_grand_piano-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/accordion-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/lead_6_voice-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/pad_1_new_age-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/pad_4_choir-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/synth_strings_2-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/violin-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/banjo-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/choir_aahs-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/cello-mp3',
  'https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy/church_organ-mp3',
];

// Pedal octave
const pedals = [
  // White
  [48, 2, "c", "C"],
  [50, 2, "d", "D"],
  [52, 2, "e", "E"],
  [53, 2, "f", "F"],
  [55, 2, "g", "G"],
  [57, 2, "a", "A"],
  [59, 2, "b", "B"],
  // Black
  [49, 2, "db", "C#/Db"],
  [51, 2, "eb", "D#/Eb"],
  [54, 2, "gb", "F#/Gb"],
  [56, 2, "ab", "G#/Ab"],
  [58, 2, "bb", "A#/Bb"],
];

// White keys (midi, note, octave, txt note, actual note)
const nw = [
  [48, 2, "c", "C"],
  [50, 2, "d", "D"],
  [52, 2, "e", "E"],
  [53, 2, "f", "F"],
  [55, 2, "g", "G"],
  [57, 2, "a", "A"],
  [59, 2, "b", "B"],

  [60, 3, "c", "C"],
  [62, 3, "d", "D"],
  [64, 3, "e", "E"],
  [65, 3, "f", "F"],
  [67, 3, "g", "G"],
  [69, 3, "a", "A"],
  [71, 3, "b", "B"],
  [72, 4, "c", "C"],
  [74, 4, "d", "D"],
  [76, 4, "e", "E"],
  [77, 4, "f", "F"],
  [79, 4, "g", "G"],
  [81, 4, "a", "A"],
  [83, 4, "b", "B"],
  [84, 5, "c", "C"],
  [86, 5, "d", "D"],
  [88, 5, "e", "E"],
  [89, 5, "f", "F"],
  [91, 5, "g", "G"],
  [93, 5, "a", "A"],
  [95, 5, "b", "B"],
  [96, 6, "c", "C"],
];

// Black keys (midi note, octave, txt note, actual note)
const nb = [
  [49, 2, "db", "C#/Db"],
  [51, 2, "eb", "D#/Eb"],
  [54, 2, "gb", "F#/Gb"],
  [56, 2, "ab", "G#/Ab"],
  [58, 2, "bb", "A#/Bb"],

  [61, 3, "db", "C#/Db"],
  [63, 3, "eb", "D#/Eb"],
  [66, 3, "gb", "F#/Gb"],
  [68, 3, "ab", "G#/Ab"],
  [70, 3, "bb", "A#/Bb"],
  [73, 4, "db", "C#/Db"],
  [75, 4, "eb", "D#/Eb"],
  [78, 4, "gb", "F#/Gb"],
  [80, 4, "ab", "G#/Ab"],
  [82, 4, "bb", "A#/Bb"],
  [85, 5, "db", "C#/Db"],
  [87, 5, "eb", "D#/Eb"],
  [90, 5, "gb", "F#/Gb"],
  [92, 5, "ab", "G#/Ab"],
  [94, 5, "bb", "A#/Bb"],
];

// Chord suffixes (name, lowest key, all keys, is major)
const chords = [
  ["major", 0, [0, 4, 7],true],
  ["m", 1, [0, 3, 7],false],
  ["dim", 2, [0, 3, 6],true],
  ["dim7", 3, [0, 3, 6, 9],true],
  ["sus2", 4, [0, 2, 7],true],
  ["sus4", 5, [0, 5, 7],true],
  ["7sus4", 6, [0, 5, 7, 10],true],
  ["aug", 7, [0, 4, 8],true],
  ["aug7", 8, [0, 4, 8, 10],true],
  ["aug9", 9, [0, 4, 8, 10, 14],true],
  ["5", 10, [0, 7],true],
  ["6", 11, [0, 4, 7, 9],true],
  ["7", 12, [0, 4, 7, 10],true],
  ["9", 13, [0, 4, 7, 10, 14],true],
  ["11", 14, [0, 4, 7, 10, 14, 17],true],
  ["13", 15, [0, 4, 7, 10, 14, 17, 21],true],
  ["69", 16, [0, 4, 7, 9, 14],true],
  ["7b5", 17, [0, 4, 6, 10],true],
  ["9b5", 18, [0, 4, 6, 10, 14],true],
  ["7b9", 19, [0, 4, 7, 10, 13],true],
  ["7sharp9", 20, [0, 4, 7, 10, 15],true],
  ["7b5b9", 21, [0, 4, 6, 10, 13],true],
  ["7sharp5b9", 22, [0, 4, 8, 10, 13],true],
  ["7b5sharp9", 23, [0, 4, 6, 10, 15],true],
  ["7sharp5sharp9", 24, [0, 4, 8, 10, 15],true],
  ["9sharp11", 25, [0, 4, 7, 10, 14, 18],true],
  ["maj7", 26, [0, 4, 7, 11],true],
  ["maj9", 27, [0, 4, 7, 11, 14],true],
  ["maj11", 28, [0, 4, 7, 11, 14, 17],true],
  ["maj13", 29, [0, 4, 7, 11, 14, 21],true],
  ["maj7b5", 30, [0, 4, 6, 11],true],
  ["maj7sharp5", 31, [0, 4, 8, 11],true],
  ["m6", 32, [0, 3, 7, 9],false],
  ["m69", 33, [0, 3, 7, 9, 14],false],
  ["m7", 34, [0, 3, 7, 10],false],
  ["m7b5", 35, [0, 3, 6, 10],false],
  ["m9", 36, [0, 3, 7, 10, 14],false],
  ["m11", 37, [0, 3, 7, 10, 14, 17],false],
  ["mmaj7", 38, [0, 3, 7, 11],false],
  ["mmaj7b5", 39, [0, 3, 6, 11],false],
  ["mmaj9", 40, [0, 3, 7, 11, 14],false],
  ["mmaj11", 41, [0, 3, 7, 11, 14, 17],false],
  ["add9", 42, [0, 4, 7, 14],true],
  ["madd9", 43, [0, 3, 7, 14],false],
  ["13sus4", 44, [0, 5, 7, 10, 14, 17],false],
  // masks
  ["6add9", 45, [0, 4, 7, 9, 14],true], // 16
  ["7#9", 46, [0, 4, 7, 10, 15],true], // 20
  ["7#5b9", 47, [0, 4, 8, 10, 13],true], // 22
  ["7b5#9", 48, [0, 4, 6, 10, 15],true], // 23
  ["7#5#9", 49, [0, 4, 8, 10, 15],true], // 24
  ["9#11", 50, [0, 4, 7, 10, 14, 18],true], // 25
  ["maj7#5", 51, [0, 4, 8, 11],true], // 31
];

// Notes
const unique_notes = ['C','D','E','F','G','A','B','C#','D#','E#','F#','G#','A#','Db','Eb','Gb','Ab','Bb'];
const allowed_beginnings = 'ABCDEFG -';
const all_notes = nw.concat(nb);
const shortcuts = 'qwertyuiopasdfghjklzxcvbnm';

let input_chords, player, last_chord, current_chord, og_kb_width;
let playing = fading = page_loaded = play_pedal = false;
let zoom = current_audiospace = same_chord_hits = 0;
let octave_shift = 0;
let audiofiles = [];

let updating_inversions_from_input = false;
let validate = false;
let loading = true;

let delayed_chord_change_actions, cookie_delayer;
let delayers = [];

let new_session = 'turbo_session';
let session_cookie = new_session;
let input, inversions, bpc, humanize, transpositions;
let instrument = instruments[0];
let loaded_session = null;

// Get raw data from some known URLs
instruments.forEach((inst, i) => {
  if(inst.indexOf('github.com') > -1){
    instruments[i] = inst.replace('github.com', 'raw.githubusercontent.com').replace('tree/', '');
  }
  // Haven't tested this laoh
  if(inst.indexOf('dropbox.com') > -1){
    instruments[i] = inst.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('dl=0', 'raw=1').replace('dl=1', 'raw=1');
  }
});

// Clear warning messages (about missing mp3 files)
function clear_fails() {
  $('.warn').remove();
}

// Display warning message (about missing mp3 files)
function fail(el, msg) {
  if(!$(el).find('.warn').length){
    $(el).append(`<div class="warn"></div>`);
  }
  $(el).find('.warn').append(`<div>${msg}</div>`);
}

// Random int
function rand_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Loader
let wobble_interval; let load_timers = [];
let site_loaded = false;
function wobbly_loader(finish=false, wobble=false){
  loading = true;
  let loader = '.site_loader .bar';
  let finish_speed = 300;
  $(loader.split(' ')[0]).css('opacity', 1);
  if(finish){
    $(loader).stop().animate({'width': '100%'}, finish_speed);
    setTimeout(function(){
      $(loader.split(' ')[0]).css('opacity', 0);
      // Additional <loading_finished> actions here
    }, finish_speed);
    return;
  }
  $(loader).css('width', 0);
  if(wobble){
    wobble_interval = setInterval(function(i){
      $(loader).stop().animate({'width': '65%'}, rand_int(3000, 7000), 'easeInOutCubic');
    }, 2000);
    load_timers[0] = setTimeout(function(){
      if(!site_loaded) {
        wobble_interval = setInterval(function(i){
          $(loader).stop().animate({'width': '99%'}, rand_int(6000, 16000), 'easeInOutCubic'); 
        }, 3000);
      }
    }, 3000);
  } else {
    $(loader).stop().animate({'width': '100%'}, 4000, 'easeInOutCubic');
  }
  load_timers[1] = setTimeout(() => { wobbly_loader(true); loading = false; }, 3000);
}

// Cycle values of a button
function cycle_values(el, int=false){
  let val = $(el).find('.value').html();
  let vals = $(el).data('values').split(',');
  let total = vals.length;
  let r = vals[0];
  vals.forEach((test, i) => {
    if(val == test && i < total-1) r = vals[i+1];
  });
  $(el).find('.value').html(r);
  return int ? parseInt(r) : r;
}

// Bind interactions
let inversion_delayer;
function bind_interactions() {

  let css_fadeout = null;
  let css_reset = null;

  // Click keyboard
  $('.kb').each(function(i){

    // xas[i] = new Array(); as
    let play_notes = $(this).data('audio').split(' ');
    let midi_notes = $(this).data('midi').split(' ');
    let oct_shift = parseInt($(this).data('octave-shift'));
    let parent = $(this);
    if(!play_pedal) play_notes.shift();
    // Apply global octave shift
    if(oct_shift != 0){
      play_notes.forEach((pn, i) => {
        let oct = parseInt(pn[pn.length-1]);
        play_notes[i] = pn.replace(oct, oct+oct_shift);
      });
    }

    // Inversion cycle buttons
    $(this).find('.tools .inverse button').unbind().click(function(){
      cycle_inversion(parent, midi_notes, $(this).hasClass('down') ? 'down' : 'up');
      inversions = update_inversions(null, true);
    });

    // Inversion cycle buttons
    $(this).find('.tools .transpose button').unbind().click(function(){
      cycle_transposition(parent, midi_notes, $(this).hasClass('down') ? 'down' : 'up');
      transpositions = update_transpositions(null, true);
    });

    // Click keyboard
    $(this).find('.clickable').unbind().click(function(){
      current_chord = $(this).parent().data('index');
      let use_audiospace = current_audiospace==2 ? 1 : 2;

      // Humanize?
      humanize = $('#humanize').is(':checked');

      // Clear warnings
      clear_fails();

      // CSS
      if(css_fadeout) clearTimeout(css_fadeout);
      if(css_reset) clearTimeout(css_reset);
      $(this).parent().removeClass('playing fadeout');
      $(this).parent().addClass('playing');
      css_fadeout = setTimeout(() => {
        $(this).parent().addClass('fadeout');
      }, 100);
      css_reset = setTimeout(() => {
        $(this).parent().removeClass('playing fadeout');
      }, 3000);

      // Fade out previous audios
      $(`.audiospace[data-audiospace="${current_audiospace}"] audio.playing`).stop().animate({volume: 0}, {
        duration: fading ? 5 : default_fadeout,
        easing: 'swing',
        step: function(now, fx) {
          this.volume = now;
        },
        start: function(){
          $(this).removeClass('playing');
          fading = true;
        },
        complete: function() {
          $(this)[0].pause();
          $(this)[0].currentTime=0;
          $(this)[0].volume=1;
          fading = false;
        }
      });

      // Play audio
      delayers[delayers.length+1] = setTimeout(() => {
        play_notes.forEach((note, i) => {
          let a = `.audiospace[data-audiospace="${use_audiospace}"] audio.sound-${note}`;
          if($(a).length){
            $(a).addClass('playing');
            if(humanize && i > 0){
              delayers[delayers.length+1] = setTimeout(() => {
                $(a)[0].currentTime = 0;
                $(a)[0].volume = 1;
                $(a)[0].play();
              }, Math.floor(Math.random() * humanization));
            } else {
              $(a)[0].currentTime = 0;
              $(a)[0].volume = play_pedal ? 0.9 : 1;
              $(a)[0].play();
            }
          } else {
            fail($(this), '! Audio missing for '+note);
          }
        });
      }, 2);

      current_audiospace = use_audiospace;
      last_chord = current_chord;

    });
  }); // .kb

  // Click Play button
  $('#play').unbind().click(function(){
    if($(this).is(':checked')){
      loop_chords();
      playing = true;
    } else {
      if(player) clearInterval(player);
      playing = false;
    }
  });

  // Click a checkbox, blur after click to enable Play spacebar
  $('input[type="checkbox"]').click(function(){
    $(this).blur();
  });

  // Click BPM
  $('#bpm').unbind().click(function(e){
    let val = $(this).find('.value').text();
    let container = $('#bpm');
    if(!$(this).find('input').length){
      $(this).find('.value').after(`<input class="inline bpm" type="text" value="${val}">`);
      $(this).find('.value').hide();
      $(this).find('input').select();
    }    
    $(this).keyup(function(e) {
      if(e.code == 'Enter') update_bpm(e);
    });
    $(document).mouseup(function(e) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        update_bpm();
      }
    });
  });

  $(this).keyup(function(e){
    if(e.code == 'Enter') update_bpm(e);
  });

  // Click Bars per Chord
  $('#bpc').unbind().click(function(){
    if(player) clearInterval(player);
    loop_bar = cycle_values('#bpc');
    construct_cookie(session_cookie);
    if(playing) loop_chords();
    $(this).blur();
  });

  // Click octave
  $('#octave').unbind().click(function(){
    change_octave(cycle_values('#octave'));
    bind_interactions();
    construct_cookie(session_cookie);
    $(this).blur();
  });

  $('#new').unbind().click(function(){
    reset();
    $(this).blur();
  });
  $('select#instrument').unbind().change(function(){
    instrument = $(this).val();
    load_instrument(instrument);
    construct_cookie(session_cookie);
    $(this).blur();
  });
  $('#humanize').unbind().change(function(){
    humanize = $('#humanize').is(':checked');
    construct_cookie(session_cookie);
    $(this).blur();
  });
  $('#play_pedal').unbind().change(function(){
    play_pedal = $('#play_pedal').is(':checked');
    bind_interactions();
    construct_cookie(session_cookie);
    $(this).blur();
  });
  $('#export').unbind().click(function(){
    generate_midi();
    $(this).blur();
  });

  if(display_all_notes){
    let notes_revealer_delayer;
    $('.kb').unbind().mouseenter(function(){
      notes_revealer_delayer = setTimeout(() => {
        $(this).find('.key:not(.down) .details').animate({'opacity': .7}, 2000);
      }, 3000);
    }).mouseleave(function(){
      if(notes_revealer_delayer) clearTimeout(notes_revealer_delayer);
      $(this).find('.key:not(.down) .details').animate({'opacity': 0}, 1000);
    });
  }

  // Load session from cookie
  $('#load').unbind().click(function(){

    if($('#open_session').length){
      $('#open_session').remove();
    } else {
      // List sessions
      let saved_sessions = [];
      for (const [name, content] of Object.entries(Cookies.get())) {
        if(name.indexOf('sess_') > -1) saved_sessions.push(name);
      }
      // Create menu
      $(this).after('<div id="open_session"></div>');
      if(saved_sessions.length == 0){
        $('#open_session').css('padding', '15px 20px').html('You have not saved anything yet. Note that all sessions are saved to cookies of your current browser in your current device.');
      }
      saved_sessions.forEach(session_name => {
        const name = session_name.replace('sess_', '');
        $('#open_session').append(`<div class="sess" data-session="${name}"><div class="name">${name}</div><div class="delete icon"><i class="fa-solid fa-trash"></i></div></div>`);
      });
      // Load selection
      $('#open_session .sess').unbind().click(function(e) {
        loading = true;
        let handle_session = $(this).data('session');
        reset();
        if($(e.target).hasClass('delete') || $(e.target).parent().hasClass('delete')){
          Cookies.remove(`sess_${handle_session}`, { path: '/' });
          // Delete session
          $(this).remove();
          bind_interaction();
        } else {
          // Load session
          loaded_session = $(this).data('session');
          auto_adjust(load_session(`sess_${loaded_session}`));
          $('#open_session').remove();
          $('#new').removeClass('hidden');
          info(`Loaded session <b>${loaded_session}</b>`);
        }
      });
    }
    // Hide Open menu on click outside
    $(document).mouseup(function(e) {
      var container = $('#open_session .sess');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('#open_session').remove();
        $(document).unbind('mouseup');
      }
    });

  });

  // Save session
  $('#save').unbind('click').click(function(){
    if(loaded_session){
      // Overwrite loaded session
      info(`Changes saved to <b>${loaded_session}</b>`);
      construct_cookie(`sess_${loaded_session}`);
    } else {
      // Save new session
      $.get('//api.inha.asia/k/', (name) => {
        info(`Session saved as <b>${name}</b>`);
        construct_cookie(`sess_${name}`);
      });
    }
  });

  // Display info when session loaded
  if(loaded_session){
    $('#save').mouseenter(() => {
      info(`Overwriting session <b>${loaded_session}</b>`, 'inf');
    }).mouseleave(() => {
      hide_info();
    });
    $('#load').mouseenter(() => {
      info(`Current session: <b>${loaded_session}</b>`, 'inf');
    }).mouseleave(() => {
      hide_info();
    })
  } else {
    $('#save, #load').unbind('mouseenter mouseleave');
  }

  // Bind physical keyboard: spacebar = play/pause; qwerty = play chords
  $(document).unbind('keydown').keydown(function(e){
    if(!$('#chords:focus').length){
      if(e.code == 'Slash' && !loading) toggle_python_view();
      if(e.code == 'Period' && !loading) toggle_chords2midi_input();
      if(e.code == 'Space') $('#play').click();
      shortcuts.split('').forEach((key, i) => {
        if(e.code == `Key${key.toUpperCase()}`) {
          if($(`.row${i}`).length) $(`.row${i} .clickable`).click();
        }
      });
    }
  });

  bind_prog_change();

} // bind_interactions()

function update_bpm() {
  bpm = $('#bpm').find('input').val();
  $('#bpm').find('.value').text(bpm);
  $('#bpm').find('input').remove();
  $('#bpm').find('.value').show();
  construct_cookie(session_cookie);
  if(player) clearInterval(player);
  if(playing) loop_chords();
  $(document).unbind('mouseup');
}

// Clean slate and reset all to defaults
function reset(session_only=false){
  loaded_session = null;
  session_cookie = new_session;
  input = '';
  inversions = '';
  if(session_only) {
    bind_interactions();
    return;
  }
  humanize = true;
  bpm = 120;
  bpc = 1;
  instrument = instruments[0];
  octave_shift = 0;
  play_pedal = false;
  $('#humanize').prop('checked', humanize).trigger('change');
  $('#bpm').find('.value').html(bpm);
  $('#bpc').find('.value').html(bpc);
  $('#instrument').val(instrument).trigger('change');
  load_instrument(instrument);
  $('#octave').find('.value').html(octave_shift);
  change_octave(octave_shift);
  $('#play_pedal').prop('checked', play_pedal).trigger('change');
  $('#chords').val(input).trigger('keyup');
  bind_interactions();
}

// Auto-config UI
let clicks_delayer;
function auto_adjust([humanize, bpm, bpc, instrument, octave_shift, input, inversions, play_pedal, transpositions]) {

  if(instrument) {
    load_instrument(instrument);
    $('#instrument').val(instrument);
  }
  if(humanize == 'true') $('#humanize').prop('checked', true).trigger('change');
  if(humanize == 'false') $('#humanize').prop('checked', false).trigger('change');
  if(bpm) $('#bpm').find('.value').html(bpm);
  if(bpc) {
    loop_bar = bpc;
    $('#bpc').find('.value').html(loop_bar);
  }
  if(octave_shift) {
    $('#octave').find('.value').html(octave_shift);
    change_octave(octave_shift);
  }
  if(input) $('#chords').val(input);
  if(inversions) {
    let inversion_per_kb = inversions.split('|');
    inversion_per_kb.forEach(function(inv, i){
      let [kb, inversion] = inv.split(':');
      let direction = parseInt(inversion) < 0 ? '.down' : '.up';
      delayers[delayers.length+1] = setTimeout(() => {
        for(i=0; i<Math.abs(parseInt(inversion)); i++){
          $(`.kb[data-index="${kb}"] .tools .inverse`).find(`${direction}`).click();
        }
      }, 600);
    });
  }
  if(transpositions) {
    let transposition_per_kb = transpositions.split('|');
    transposition_per_kb.forEach(function(tra, i){
      let [kb, transposition] = tra.split(':');
      let direction = parseInt(transposition) < 0 ? '.down' : '.up';
      delayers[delayers.length+1] = setTimeout(() => {
        for(i=0; i<Math.abs(parseInt(transposition)); i++){
          $(`.kb[data-index="${kb}"] .tools .transpose`).find(`${direction}`).click();
        }
      }, 1200);
    });
  }
  if(play_pedal=='true') $('#play_pedal').prop('checked', true).trigger('change');
  if(play_pedal=='false') $('#play_pedal').prop('checked', false).trigger('change');

  if(clicks_delayer) clearTimeout(clicks_delayer);
  clicks_delayer = setTimeout(() => {
    $('#chords').trigger('keyup');
    bind_interactions();
  }, 400);
}

// Get session to vars
function load_session(cookie=session_cookie) {
  if(Cookies.get(cookie)) return Cookies.get(cookie).split(';');
}

// Change octave
function change_octave(oct){
  $('.kb').each(function(){
    $(this).data('octave-shift', oct);
  });
  octave_shift = oct;
  construct_cookie(session_cookie);
}

// Play function
function loop_chords(){
  // Stop all that is playing
  $('.kb').removeClass('playing');
  if(player) clearInterval(player);
  delayers.forEach((delayer) => {
    clearTimeout(delayer);
    clearInterval(delayer);
  });

  let beats = 4; // Beats per bar
  let last_bar = $('.kb').length;
  let len = 60/bpm*beats*1000;
  let i = 0;

  // Programmatically click elements
  $('.kb').eq(i).find('.clickable').click();
  if(loop_bar > 1){
    loop_counter = 1;
    for(ii=1;ii<loop_bar;ii++){
      delayers[delayers.length+1] = setTimeout(() => {
        $('.kb').eq(i).find('.clickable').click();
        loop_counter++;
        if(loop_counter==loop_bar) i++;
      }, len*ii);
    }
  } else {
    i++;
  }

  // Repeat same clicks on interval
  player = setInterval(() => {
    if(i==last_bar) i = 0;
    $('.kb').eq(i).find('.clickable').click();
    if(loop_bar > 1){
      loop_counter = 1;
      for(ii=1;ii<loop_bar;ii++){
        delayers[delayers.length+1] = setTimeout(() => {
          $('.kb').eq(i).find('.clickable').click();
          loop_counter++;
          if(loop_counter==loop_bar) i++;
        }, len*ii);
      }
    } else {
      i++;
    }
  }, len*loop_bar);

}

// Generate list of all available chords
function generate_chord_list(html=false) {
  let chord_list = []
  chords.forEach((c) => {
    if(c[0].indexOf('sharp') == -1){ // Use the masks "#" rather than "sharp"
      unique_notes.forEach((n) => {
        if(n.indexOf('/') > -1){
          [n1, n2] = n.split('/');
          chord_list.push(n1+c[0]);
          chord_list.push(n2+c[0]);
        } else {
          chord_list.push(n+c[0]);
        }
      });
    }
  });
  if(html===false){
    return chord_list;
  } else {
    let html = `<select class="chord_list">`;
    html += `<option>Select chord</option>`;
    chord_list.forEach((c) => { html += `<option value="${c}">${c}</option>`; });
    html += `</select>`;
    return html;
  }
}

// Load instrument from select menu
function load_instrument(load_instrument) {

  wobbly_loader(); // Display loader
  let octaves = [1, 2, 3, 4, 5, 6, 7]; // Octaves to load

  // Remove previous
  $('.audiospace').remove();

  // Create two sets of audio elements for better polyphonics
  [1, 2].forEach((e, i) => {
    $('body').prepend(`<div class="audiospace poly${e}" data-audiospace="${e}"></div>`);
    unique_notes.forEach((note) => { 
      if(note.indexOf('#') == -1) {
        octaves.forEach((oct) => {
          $(`.poly${e}`).append(`<audio class="sound-${note}${oct}" src="${load_instrument}/${note}${oct}.mp3" preload="auto">`);
        });
      } 
    });
  })

  instrument = load_instrument;
  return load_instrument;
}

// Midi note (int) to regular note ("C4")
function midi_to_note(midi_note) {
  let matches = all_notes.filter(note => midi_note==note[0])[0];
  [_, oct, __, note_d] = matches;
  note_d = note_d.indexOf('/') > -1 ? note_d.split('/')[1] : note_d;
  return note_d+oct;
}

// Regular note ("C4") to midi note (int)
function note_to_midi(note) {
  let found_midi = null;
  nw.forEach((n) => {
    [midi, oct, _, note_d] = n;
    if(note_d+oct==note) found_midi = midi;
  });
  nb.forEach((n) => { 
    [midi, oct, _, note_d] = n;
    [n1, n2] = note_d.split('/');
    if(n1+oct==note || n2+oct==note) found_midi = midi;
  });
  return found_midi;
}

// Update keys of an existing keyboard
function update_keys(el, notes) {
  el.find('.key').removeClass('down');

  // Highlight pressed notes
  notes.forEach((note, i) => {
    el.find(`.key[data-midi="${note}"]`).addClass('down');
  });

  // Update which audio files this keyboard plays
  new_audio = [];
  new_audio.push(midi_to_note(el.data('pedal')));
  notes.forEach(n => new_audio.push(midi_to_note(n)));

  // Store those to keyboard data attributes
  el.data('midi', notes.join(' '));
  el.data('audio', new_audio.join(' '));
}

// Cycle chord transposition up or down
function cycle_transposition(el, notes, direction='down') {

  // Limit transposition to lowest and highest visible midi note
  let [min, max] = [60, 96];
  let kb_id = el.data('index');
  let transposition = parseInt(el.find('.tools').data('transposition')) + (direction=='down' ? -1 : 1);

  // Update notes
  notes.forEach((note, i) => { notes[i] = parseInt(note); });
  notes.forEach((note, i) => {
    notes[i] = note + (direction=='down' ? -1 : 1);
  });

  // Update pedal note as well
  el.data('pedal', parseInt(el.data('pedal')) + (direction=='down' ? -1 : 1)) ;

  if(Math.min(...notes) < min || Math.max(...notes) > max) return;
  el.find('.tools').data('transposition', transposition);

  // Button styles
  el.find('.tools .transpose, .tools .transpose button').removeClass('active');
  if(transposition > 0){
    el.find('.tools .transpose, .tools .transpose .up').addClass('active');
  } else if (transposition < 0){
    el.find('.tools .transpose, .tools .transpose .down').addClass('active');
  }
  update_keys(el, notes);
  bind_interactions();
  construct_cookie(session_cookie);
}

// Cycle chord inversion up or down
let input_update_delayer;
function cycle_inversion(el, notes, direction='down') {

  // Limit inversion to lowest and highest visible midi note
  let [min, max] = [60, 96];
  let kb_id = el.data('index');

  // If chord exceeds 1 octave, inverse 2 octaves
  let lowest_chord_note = Math.min(...notes);
  let highest_chord_note = Math.max(...notes);
  let change_scale = highest_chord_note - lowest_chord_note > 12 ? 24 : 12;
  
  let inversion = parseInt(el.find('.tools').data('inversion')) + (direction=='down' ? -1 : 1);

  // Do it
  notes.forEach((note, i) => { notes[i] = parseInt(note); });
  let change = direction=='down' ? highest_chord_note : lowest_chord_note;
  notes.forEach((note, i) => {
    if(note == change){
      notes[i] = note + (direction=='down' ? -change_scale : change_scale);
    }
  });

  if(Math.min(...notes) < min || Math.max(...notes) > max) return;

  el.find('.tools').data('inversion', inversion);

  // Button styles
  el.find('.tools .inverse, .tools .inverse button').removeClass('active');
  if(inversion > 0){
    el.find('.tools .inverse, .tools .inverse .up').addClass('active');
  } else if (inversion < 0){
    el.find('.tools .inverse, .tools .inverse .down').addClass('active');
  }

  update_keys(el, notes);
  bind_interactions();
  construct_cookie(session_cookie);

  // Update inversions in input field (deprecated?)
  if(input_update_delayer) clearTimeout(input_update_delayer);
  if(include_inversions){
    input_update_delayer = setTimeout(() => {
      update_input();
    }, 50);
  }
}

// Get inversions from input field (deprecated?)
function inversions_from_input() {
  let inputs = $('#chords').val().split(' ');
  inputs.forEach((input, i) => {
    if(input.indexOf(':') > -1){
      let [input_chord, input_inversion] = input.split(':');
      $(`.kb[data-index="${i}"]`).find('.tools').data('inversion', input_inversion);
    }
  });
}

// Update inversions string for session
function update_inversions(key=null, force_update=false) {
  let updated_inversions = [];
  $('.kb').each(function(){
    updated_inversions.push($(this).data('index')+':'+$(this).find('.tools').data('inversion'));
  });
  inversions = updated_inversions.join('|');
  return inversions;
}

// Update transpositions string for session
function update_transpositions(key=null, force_update=false) {
  let updated_transpositions = [];
  $('.kb').each(function(){
    updated_transpositions.push($(this).data('index')+':'+$(this).find('.tools').data('transposition'));
  });
  transpositions = updated_transpositions.join('|');
  return transpositions;
}

// Fix CSS styling, notably keyboard sizes when DOM or window changes
// TODO: improve this, mobile in particular
function fix_style(current_zoom) {
  // Default = 2 cols, mobile = 1 col, large screen = 3 cols
  let cols = 2;
  if($(window).width() < mobile) cols = 1;
  if($(window).width() > large_screen) cols = 3;

  let w = $('body').width();
  let margin = 20;
  let col = w/cols - margin/2;
  let zoom = col/og_kb_width;
  if(zoom != current_zoom){  
    $('.kb .clickable').css('zoom', zoom);
    $('.kb .key .details').css('zoom', 1-zoom);
  }
  $('.kb').css('margin', '');
  $(`.kb:nth-child(${cols}n)`).css('margin-right', 0);
  return zoom;
}

// Hide info message
let info_delayer = [];
function hide_info() {
  info_delayer.forEach(delayer => clearTimeout(delayer));
  info_delayer[0] = setTimeout(() => {
    $('.info').html('').removeClass('active');
    if($('.info').css('width') == '1px'){
      info_delayer[1] = setTimeout(() => {
        $('.info').html('').removeClass('active');
      }, 20);
    }
  }, 2);
}

// Display info message
function info(msg, delay=4, type='info'){
  $('.info').addClass('active');
  setTimeout(() => {
    $('.info').html(msg);
  }, 50);
  if(!isNaN(delay)){
    setTimeout(() => {
      hide_info();
    }, delay*1000);
  }
}

// Fetch session details and save to cookie
function construct_cookie(cookie=session_cookie) {
  if(cookie_delayer) clearTimeout(cookie_delayer);
  cookie_delayer = page_loaded ? setTimeout(() => {
    humanize = $('#humanize').is(':checked');
    bpm = $('#bpm').find('.value').text();
    bpc = $('#bpc').find('.value').text();
    instrument = $('#instrument').val();
    octave_shift = $('#octave').find('.value').text();
    input = $('#chords').val();
    inversions = update_inversions();
    transpositions = update_transpositions();
    play_pedal = $('#play_pedal').is(':checked');
    let cookie_value = [humanize, bpm, bpc, instrument, octave_shift, input, inversions, play_pedal, transpositions].join(';');
    Cookies.set(cookie, cookie_value);
  }, 2000) : null;
}

// Autocomplete
let autocomplete_delayer;
function update_autocomplete(field_input) {
  if(autocomplete_delayer) clearTimeout(autocomplete_delayer);
  autocomplete_delayer = setTimeout(() => {
    let entries = field_input.split(' ');
    let last = entries.length-1;
    let pre = entries.pop();
    if(pre.length >= 1){
      $('.autocomplete-helper .pre').html(entries.join(' '));
      $('#faux').val(pre);
      $('#faux').autocomplete('search', pre);
      $('.ui-autocomplete li').unbind('click').click(function() {
        // let new_val = entries.length ? entries.join(' ')+' ' : '' + $(this).find('div').text() + ' ';
        // $('#chords').val(new_val).trigger('keyup');
        $('#chords').val( entries.join(' ') + ' ' + $(this).find('div').text() + ' ').trigger('keyup');
        setTimeout(function(){
          inversions = update_inversions(null, true);
          $('#chords').focus();
        }, 20);
      });
    }
  }, 200);
}

// Init autocomplete
function init_autocomplete() {
  let all_chords = generate_chord_list();
  $('#faux').autocomplete({
    source: all_chords,
    minLength: 1
  });
}

// Capitalize first letter (of chord in input)
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get params for MIDI export
function get_params(post=true) {
  let midi_chords = [];
  $('.kb').each(function(){
    let chord = play_pedal ? $(this).data('pedal')+',' : '';
    chord += $(this).data('midi').replaceAll(' ',',');
    midi_chords.push(chord);
  });
  midi_string = midi_chords.join('|');
  data = {
    chords: midi_string,
    bpm: parseInt(bpm),
    cpb: parseInt(bpc),
    octave_shift: parseInt(octave_shift),
    humanize: humanize
  }
  let string = '';
  for (const [key, value] of Object.entries(data)) {
    if(value != 0) string += `--${key} ${value} `;
  }
  return post ? data : string;
}

// Generate and download MIDI file
function generate_midi() {
  $.ajax({
    url: generate_midi_url,
    data: get_params(),
    method: 'POST',
    success: function(filename){
      window.location=generate_midi_url+filename;
    }
  });
}

// Bind #chords keyup
function bind_prog_change() {

  // Create a keyboard template
  // let tpl = $('.tpl').clone().html();

  let tpl = $('.tpl').clone();
  tpl.find('.clickable').css('zoom', zoom);
  tpl = tpl.html();

  let input_chords = [];
  $('#chords').unbind('keyup').keyup(function(e){

    // Stop things that should not be happening rn
    if(player) clearInterval(player);
    if(delayed_chord_change_actions) clearInterval(delayed_chord_change_actions);

    input = $(this).val().replaceAll('  ', ' ');

    // Remove all chords if input is empty
    if(input == '' || !input) {
      $('.kb').remove();
      reset(true);
      return;
    }

    // Process input
    input_chords = input.split(' ');
    let add_space = false;
    if(input[input.length-1] == ' ') {
      input_chords.pop();
      add_space = true;
    }
    input_chords.forEach((w, i) => {
      let new_w = capitalize(w);
      input_chords[i] = new_w;
    });
    $('#chords').val(input_chords.join(' ') + (add_space ? ' ' : ''));
    input_chords = $('#chords').val().split(' ');

    // Check this sometime. I don't think this works yet.
    if(validate){
      let filtered_chords = [];
      input_chords.forEach((input_chord, i) => {
          if(allowed_beginnings.indexOf(input_chord[0]) > -1){
            filtered_chords.push(input_chord);
          }
      });
      $('#chords').val(filtered_chords.join(' ') + (add_space ? ' ' : ''));
      input_chords = $('#chords').val().split(' ');
    }

    // Get octave shift
    octave_shift = parseInt($('#octave').find('.value').text());

    // Handle autocomplete
    if(e.code == 'Space' && $('.ui-autocomplete').is(':visible')){
      $('#faux').autocomplete('close');
    }
    if(page_loaded && autocomplete) update_autocomplete(input);

    $('.kb').addClass('obsolete');
    $('.hr').remove();

    // Iterate over words in input field
    input_chords.forEach((entry, i) => {

      let [input_chord, input_inversion] = entry.split(':');
      let kb_id = `row${i}`;
      let kb_exists = $(`.kbs .${kb_id}`).length;

      // Remove hötö
      input_chord = input_chord.replace('-', '').replace(',', '').replace('(', '').replace(')', '');

      // TODO:
      // Turn --- into separator
      
      // Skip already if it's just drivelpoop
      if(input_chord=='' || (input_chord.length == 1 && !/^[a-zA-Z]+$/.test(input_chord))) return;

      // Determine whether root note is 1 or 2 chars
      let test = input_chord[1] == '#' || input_chord[1] == 'b' ? input_chord[0]+input_chord[1] : input_chord[0] ;

      // Get root note
      let root_midi = $(`[data-note="${test+default_octave}"]`).data('midi') || $(`[data-note2="${test+default_octave}"]`).data('midi');
      let pedal = note_to_midi(test[0]+(default_octave-1));

      // Skip already if not included in notes list
      if(!unique_notes.includes(test)) return;

      // Default chord to major
      if(input_chord.length == 1 || (input_chord.length == 2 && (input_chord[1] == '#' || input_chord[1] == 'b'))) input_chord = input_chord+'major';

      // Draw keyboard and fetch notes for each chord that exists in user input
      let notes = [];
      chords.forEach((list_chord) => {
        [name, index, intervals, is_major] = list_chord;
        let full_chord = input_chord.replaceAll('/', '');        
        if(test+name == full_chord){
          $(`.${kb_id}`).removeClass('obsolete');
          intervals.forEach((interval) => {
            notes.push(root_midi+interval);
          });
          // Update keyboard if it exists and chord changed
          if(kb_exists){
            let kb_chord = $(`.${kb_id}`).data('chord');
            if(kb_chord != full_chord) {
              update_keys($(`.${kb_id}`), notes);
              $(`.${kb_id}`).data('chord', full_chord);
              $(`.${kb_id}`).data('pedal', pedal);
              if(include_inversions) $(`.${kb_id}`).find('.tools').data('inversion', input_inversion);
            }
            return;
          // Create new keyboard
          } else {
            $('.kbs').append(`<div class="kb ${kb_id}" data-index="${i}" data-pedal="${pedal}" data-chord="${full_chord}" data-octave-shift="${octave_shift}" data-inversion="0" >${tpl}</div>`);
            update_keys($(`.${kb_id}`), notes);
          }
        } // if chord found
      });

    });

    // Remove obsolete keyboards
    $('.obsolete').remove();

    // Fix CSS
    zoom = fix_style(zoom);

    // Update inversions
    inversions = update_inversions(e.code);
    
    // Bind keyboard click and possibly resume play
    if(delayed_chord_change_actions) clearTimeout(delayed_chord_change_actions)
    delayed_chord_change_actions = setTimeout(() => {
      construct_cookie(session_cookie);
      bind_interactions();
      if(playing) loop_chords();
      if(include_inversions && !loading && add_space) update_input();
    }, 200);


  });
} // bind prog_change #chords keyup

// Update chords input
function update_input(){
  let input_chords = $('#chords').val().split(' ');
  if(input_chords[input_chords.length-1] == ''){
    input_chords.pop();
  }
  let internal_inversions = inversions.split('|');
  new_entries = [];
  input_chords.forEach((entry, i) => {
    let [ch, inv] = internal_inversions[i].split(':');
    let new_entry = entry.indexOf(':') > -1 ? entry.split(':')[0] : entry;
    new_entries.push(`${new_entry}:${inv}`);
  });
  $('#chords').val(new_entries.join(' ')+' ');
}

// Toggle chords2midi.py util helper
function toggle_chords2midi_input() {
  if($('#c2m').hasClass('visible')) {
    $('#c2m').removeClass('visible');
  } else {
    let params = get_params(false);
    $('#c2m').val(`python chords2midi.py ${params}`).select();
    $('#c2m').addClass('visible');
  }
}

// Toggle Python variable helper
function toggle_python_view() {
  if($('.python').hasClass('visible')) {
    $('.python').removeClass('visible');
  } else {
    let input_chords = $('#chords').val().split(' ');
    html = `chords = [\n`;
    input_chords.forEach((inp, i) => {
      let ch = inp.split(':')[0];
      let inv = $(`.kb[data-index="${i}"]`).find('.tools').data('inversion');
      if(inp != '') html += `  '${ch}:${inv}',\n`;
    })
    html += `]`;
    $('.python').val(html).addClass('visible');
  }
}

//
//  Onload
//
$(document).ready(function(){

  // Display loader
  wobbly_loader();

  // Create white keys and audiofile filenaming scheme
  nw.slice(7, nw.length).forEach((k, i) => {
    [midi, oct, note, note_d] = k;
    $(`.tpl .clickable`).append(`<div class="white key" data-note="${note_d}${oct}" data-midi="${midi}"><div class="details">${note_d}${oct}<br>${midi}</div></div>`);
    // audiofiles.push(note_d+oct);
  });

  // Create black keys and audiofile filenaming scheme
  nb.slice(5, nw.length).forEach((k) => {
    [midi, oct, note, note_d] = k;
    [note1, note2] = note_d.split('/');
    let parent = midi-1;
    $('.tpl').find(`.key[data-midi="${parent}"]`).append(`<div class="black key" data-note="${note2}${oct}" data-note2="${note1}${oct}" data-midi="${midi}" id="k${midi}"><div class="details">${note1}${oct}<br>${note2}${oct}<br>${midi}</div></div>`);
    // audiofiles.push(note2+oct);
  });

  // Create instrument menu
  instruments.forEach((instrument) => {
    let path = instrument.split('/');
    let name = path[path.length-1].replace('-mp3', '').replaceAll('_', ' ');
    $('select#instrument').append(`<option value="${instrument}">${name}</option>`);
  });

  // Restore last session
  if(Cookies.get(session_cookie)){
    [humanize, bpm, bpc, instrument, octave_shift, input, inversions, play_pedal] = load_session(session_cookie);
    humanize = humanize=='true' ? true : false;
    play_pedal = play_pedal=='true' ? true : false;
  }

  // Change input field
  bind_prog_change();

  // Adjust UI according to session
  auto_adjust(load_session(session_cookie));

  // Button descriptions
  $('button').each(function(){
    let alt = $(this).attr('alt');
    $(this).attr('title', alt);
  });

  // Finish up pageload
  delayers[delayers.length+1] = setTimeout(() => {
    bind_interactions();
    if(autocomplete) init_autocomplete();
    og_kb_width = $('.kb').width();
    zoom = fix_style(zoom);
    $('.kbs').addClass('ready');
    page_loaded = true;
  }, 1000);

});

// Resize window
let resize_delayer = null;
$(window).resize(function(){
  $('.kbs').addClass('resizing');
  if(resize_delayer) clearTimeout(resize_delayer);
  resize_delayer = setTimeout(() => {
    zoom = fix_style(zoom);
    $('.kbs').removeClass('resizing');
  }, 500);
});
