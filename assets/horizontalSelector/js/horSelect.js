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
            },
            setVars: function(){
              HorSelect.allOpt = this.$el.find(".option");
              HorSelect.firstOpt = this.$el.find(".option:nth-child(1)");
              HorSelect.lastOpt = this.$el.find(".option:last-child");
              HorSelect.nextOpt = this.$el.find(".option.selected").next();
              HorSelect.prevOpt = this.$el.find(".option.selected").prev();
              HorSelect.ActualOpt = this.$el.find(".option.selected");
            },
            next: function(){
              this.setVars();
              if(HorSelect.allOpt.hasClass("selected")){
                HorSelect.allOpt.removeClass("selected");
                HorSelect.nextOpt.addClass("selected");
                this.updateScroll();
              }else{
                HorSelect.firstOpt.addClass("selected");
              }
            },
            prev: function(){
              this.setVars();
              if(HorSelect.allOpt.hasClass("selected")){
                HorSelect.allOpt.removeClass("selected");
                HorSelect.prevOpt.addClass("selected");
                this.updateScroll();
              }else{
                HorSelect.lastOpt.addClass("selected");
              }
            },
            updateScroll: function(direction){
              var index = HorSelect.ActualOpt.index() + 1;
              var widthElement = HorSelect.firstOpt.width();
              var marginLeft = widthElement * index;
              var container = HorSelect.firstOpt.parent().parent();
              var containerWidth = container.width();

              container.animate({scrollLeft: marginLeft - widthElement * 2}, 800);
            }

        });

        HorSelect.on("start", function(options){
          HorSelect.position = options.position;
          // Collectionview
          HorSelect.collectionview = new HorSelect.CollectionView({collection: options.models});
          HorSelect.Channel.reply("get:root", function(){
            return HorSelect.collectionview;
          });

          // keyboard function
          HorSelect.Channel.on("selected:next", function(){
            HorSelect.collectionview.next();
          })
          HorSelect.Channel.on("selected:prev", function(){
            HorSelect.collectionview.prev();
          })
        });

        return HorSelect;
    };

    return HorSelectConstructor;
});
