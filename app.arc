@app
begin-app

@static
folder build

@http

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
