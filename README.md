
# IPPower9258 plugin for homebridge

homebridge IPPower9258 support as light accessories


## Example

```javascript
{
    "bridge": {
        "name": "Homebridge",
        "username": "CC:22:3D:E3:CE:30",
        "port": 51826,
        "pin": "031-45-154"
    },
    
    "description": "Example config",

    "accessories": [
      {
        "accessory": "ippower9258",
        "name" : "bulby",
        "ipaddress": "192.168.0.11",
        "username": "admin",
        "password": "12345678",
        "outlet": 1
      }
    ],

    "platforms": [
    ]
}
```


## License

This is free software; you can redistribute and/or modify it under the terms of the MIT Licence. See the COPYING file for more information.

