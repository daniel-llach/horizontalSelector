"use strict";

require.config({
    paths : {
        backbone : "../bower_components/backbone/backbone",
        underscore : "../bower_components/underscore/underscore",
        jquery : "../bower_components/jquery/dist/jquery",
        "backbone.marionette" : "../bower_components/backbone.marionette/lib/core/backbone.marionette",
        "backbone.radio" : "../bower_components/backbone.radio/build/backbone.radio",
        "backbone.babysitter" : "../bower_components/backbone.babysitter/lib/backbone.babysitter",
        text: "../bower_components/requirejs-text/text",
        "assets": "../assets"
    },
    enforceDefine: true,
    map: {
        '*': {
            'backbone.wreqr': 'backbone.radio'
        }
    }
});

define([
  "backbone.marionette",
  "backbone.radio",
  "radio.shim",
  "../assets/horizontalSelector/js/horSelect"
], function (Marionette, Radio, Shim, HorSelect) {
    // App.start();
    window.Radio = Radio;

    var EmptyCollection = Backbone.Collection.extend();
    var semanasArray = [
       {
          "id":1,
          "periodo_id":2,
          "nombre":"S9",
          "fecha_inicio":"2015-08-24",
          "fecha_fin":"2015-08-29",
          "habilitado":true
       },
       {
          "id":2,
          "periodo_id":2,
          "nombre":"S8",
          "fecha_inicio":"2015-08-17",
          "fecha_fin":"2015-08-22",
          "habilitado":true
       },
       {
          "id":3,
          "periodo_id":2,
          "nombre":"S3",
          "fecha_inicio":"2015-07-13",
          "fecha_fin":"2015-07-18",
          "habilitado":true
       },
       {
          "id":4,
          "periodo_id":2,
          "nombre":"S2",
          "fecha_inicio":"2015-07-06",
          "fecha_fin":"2015-07-11",
          "habilitado":true
       },
       {
          "id":5,
          "periodo_id":2,
          "nombre":"S1",
          "fecha_inicio":"2015-06-29",
          "fecha_fin":"2015-07-04",
          "habilitado":true
       },
       {
          "id":6,
          "periodo_id":2,
          "nombre":"S7",
          "fecha_inicio":"2015-08-10",
          "fecha_fin":"2015-08-15",
          "habilitado":true
       },
       {
          "id":7,
          "periodo_id":2,
          "nombre":"S6",
          "fecha_inicio":"2015-08-03",
          "fecha_fin":"2015-08-08",
          "habilitado":true
       },
       {
          "id":8,
          "periodo_id":2,
          "nombre":"S5",
          "fecha_inicio":"2015-07-27",
          "fecha_fin":"2015-08-01",
          "habilitado":true
       },
       {
          "id":9,
          "periodo_id":2,
          "nombre":"S4",
          "fecha_inicio":"2015-07-20",
          "fecha_fin":"2015-07-25",
          "habilitado":true
       },
       {
          "id":10,
          "periodo_id":2,
          "nombre":"S19",
          "fecha_inicio":"2015-11-02",
          "fecha_fin":"2015-11-07",
          "habilitado":true
       },
       {
          "id":11,
          "periodo_id":2,
          "nombre":"S18",
          "fecha_inicio":"2015-10-26",
          "fecha_fin":"2015-10-31",
          "habilitado":true
       },
       {
          "id":12,
          "periodo_id":2,
          "nombre":"S13",
          "fecha_inicio":"2015-09-21",
          "fecha_fin":"2015-09-26",
          "habilitado":true
       },
       {
          "id":13,
          "periodo_id":2,
          "nombre":"S12",
          "fecha_inicio":"2015-09-14",
          "fecha_fin":"2015-09-19",
          "habilitado":true
       },
       {
          "id":14,
          "periodo_id":2,
          "nombre":"S11",
          "fecha_inicio":"2015-09-07",
          "fecha_fin":"2015-09-12",
          "habilitado":true
       },
       {
          "id":15,
          "periodo_id":2,
          "nombre":"S10",
          "fecha_inicio":"2015-08-31",
          "fecha_fin":"2015-09-05",
          "habilitado":true
       },
       {
          "id":16,
          "periodo_id":2,
          "nombre":"S17",
          "fecha_inicio":"2015-10-19",
          "fecha_fin":"2015-10-24",
          "habilitado":true
       },
       {
          "id":17,
          "periodo_id":2,
          "nombre":"S16",
          "fecha_inicio":"2015-10-12",
          "fecha_fin":"2015-10-17",
          "habilitado":true
       },
       {
          "id":18,
          "periodo_id":2,
          "nombre":"S15",
          "fecha_inicio":"2015-10-05",
          "fecha_fin":"2015-10-10",
          "habilitado":true
       },
       {
          "id":19,
          "periodo_id":2,
          "nombre":"S14",
          "fecha_inicio":"2015-09-28",
          "fecha_fin":"2015-10-03",
          "habilitado":true
       },
       {
          "id":20,
          "periodo_id":2,
          "nombre":"S22",
          "fecha_inicio":"2015-11-23",
          "fecha_fin":"2015-11-28",
          "habilitado":true
       },
       {
          "id":21,
          "periodo_id":2,
          "nombre":"S23",
          "fecha_inicio":"2015-11-30",
          "fecha_fin":"2015-12-05",
          "habilitado":true
       },
       {
          "id":22,
          "periodo_id":2,
          "nombre":"S20",
          "fecha_inicio":"2015-11-09",
          "fecha_fin":"2015-11-14",
          "habilitado":true
       },
       {
          "id":23,
          "periodo_id":2,
          "nombre":"S21",
          "fecha_inicio":"2015-11-16",
          "fecha_fin":"2015-11-21",
          "habilitado":true
       },
       {
          "id":24,
          "periodo_id":2,
          "nombre":"S26",
          "fecha_inicio":"2015-12-21",
          "fecha_fin":"2015-12-26",
          "habilitado":true
       },
       {
          "id":25,
          "periodo_id":2,
          "nombre":"S24",
          "fecha_inicio":"2015-12-07",
          "fecha_fin":"2015-12-12",
          "habilitado":true
       },
       {
          "id":26,
          "periodo_id":2,
          "nombre":"S25",
          "fecha_inicio":"2015-12-14",
          "fecha_fin":"2015-12-19",
          "habilitado":true
       }
    ];
    var semanasCollection = new EmptyCollection(semanasArray); // collection all
    var SomeRegion = Marionette.Region.extend();
    var somediv = new SomeRegion({
        el: "#somediv"
    });

    var horselect = new HorSelect("attrSelect");
    horselect.start({
        models: semanasCollection,
        position: "absolute"
    });

    var horSelectChannel = Radio.channel("attrSelect");
    var horSelectView = horSelectChannel.request("get:root");
    somediv.show(horSelectView);
});
