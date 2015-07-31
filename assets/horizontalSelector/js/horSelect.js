define([
    "backbone.marionette",
    "backbone.radio",
    "radio.shim",
    "text!assets/horizontalSelector/templates/item.html"
], function (Marionette, Radio, Shim, ItemTemplate) {

    var HorSelectConstructor = function(channelName){

        var HorSelect = new Marionette.Application();
        HorSelect.Channel = Radio.channel(channelName);

        HorSelect.ItemView = Marionette.ItemView.extend({
            tagName: "div",
            className: "option",
            template: _.template(ItemTemplate),
            attributes: function() {
              return {
                'title': this.model.get('nombre') + " · " + this.model.get('fecha_inicio') + " / " + this.model.get('fecha_fin')
              };
            },
            templateHelpers: function() {
              return {
                num: this.model.collection.indexOf(this.model) + 1
              };
            },
            events: {
              "click": "toggleSelect"
            },
            toggleSelect: function(){
              this.$el.parent().find(".option").removeClass("selected");
              this.$el.toggleClass("selected");
            }
        });

        HorSelect.CollectionView = Marionette.CollectionView.extend({
            tagName: "div",
            className: "horSelect",
            childView: HorSelect.ItemView,
            onShow: function(){
              this.setContainer();
              this.setDimension();
            },
            setContainer: function(){
              this.$el.parent().css({
                "position": HorSelect.position,
                "overflow-x": "scroll"
              });
            },
            setDimension: function(){
              var totalItem = this.collection.size() + 1;
              var itemWidth = this.$el.find(".option:first-child").width();
              var totalWidth = totalItem * itemWidth;
              this.$el.width(totalWidth);
            }
        });

        HorSelect.on("start", function(options){
          HorSelect.position = options.position;
          // Collectionview
          HorSelect.collectionview = new HorSelect.CollectionView({collection: options.models});
          HorSelect.Channel.reply("get:root", function(){
            return HorSelect.collectionview;
          });
        });

        return HorSelect;
    };

    return HorSelectConstructor;
});
