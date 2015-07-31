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
  Json with the options array, this support for default the semana fields: name, fecha_inicio and fecha_fin

### position
  This can be *absolute* or *relative* and affect the parent position div, this is require to the horizontal scroll take effect.
