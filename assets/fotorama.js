import $ from "jquery/dist/jquery.js";
window.$ = $

import _ from "fotorama/fotorama.js";
import _ from "fotorama/fotorama.css";

import _ from './index.css';

$(() => {
  $('#show_gallery').click(() => {
    $('#show_gallery').hide()
    $('#gallery_block').show()

    $('#gallery').fotorama()
  })
})