function SetCookie(key, value)
{
    SetCookieEx(key, value, 3650);
}

function SetCookieEx(key, value, expiresTime, expiresDate)
{
	var argv = SetCookieEx.arguments;
	var argc = SetCookieEx.arguments.length;
	var expires;
	if( expiresDate )
	{
	    expires = expiresDate;
	}
	else
	{
	    var now = new Date();
	    now.setDate(now.getDate() + expiresTime);
	    expires = now; //(2 < argc) ? argv[2] : null;
	}
	var path = (4 < argc) ? argv[4] : null;
	//var domain = '.fund123.cn';//(5 < argc) ? argv[5] : null; 
	var domain = (5 < argc) ? argv[5] : null; 
	var secure = (6 < argc) ? argv[6] : false;
	var cookieValue =  key + '=' + escape (value)
		+ ((expires == null) ? '' : ('; expires=' + expires.toGMTString()))
		+ ';path=/'		//((path == null) ? '' : ('; path=' + path))
		+ ((domain == null) ? '' : ('; domain=' + domain))
		+ ((secure == true) ? '; secure' : '');
	document.cookie = cookieValue;
}

function GetCookie(key)
{
	var arg = key + '=';
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while( i < clen )
	{
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
		{
			var offset = j;
			var endstr = document.cookie.indexOf (';', offset);
			if (endstr == -1)
			{
				endstr = document.cookie.length;
			}
			return unescape(document.cookie.substring(offset, endstr));
		}
		i = document.cookie.indexOf(' ', i) + 1;
		if ( i==0 ) break;
	}
	return null;
}

function SaveUserData(objPersistent, key, name, value)
{
	objPersistent.setAttribute(name, value);
	objPersistent.save(key);
}

function LoadUserData(objPersistent, key, name)
{
	objPersistent.load(key);
	return objPersistent.getAttribute(name);
}