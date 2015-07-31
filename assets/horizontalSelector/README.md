# horizontalSelector
Choose an option horizontally.

## :beer: Example start

```javascript
horselect.start({
    models: semanasCollection,
    position: "absolute"
});
```

### models
  Json with the options *Collection*, this support for default the semana fields: name, fecha_inicio and fecha_fin

### position
  This can be **absolute** or **relative** and affect the parent position div, this is require to the horizontal scroll take effect.


## :electric_plug: channel
Get 2 inputs, to integrate with a external keyboard interface.

### select:next
```javascript
HorSelect.Channel.on("selected:next", function(){
  HorSelect.collectionview.next();
})
```

### select:prev
```javascript
HorSelect.Channel.on("selected:prev", function(){
  HorSelect.collectionview.prev();
})
```
