function KiemTra(){
	var ht = f.HoVaTen.value;
	var dc = f.DiaChi.value;
	var em = f.Email.value;
	var dt = f.DienThoai.value;
    var emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	var dtRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
	
	if(ht=='')
	{
		alert('Họ và tên không được bỏ trống!');
		return false;
	}
	
	if(dc=='')
	{
		alert('Địa chỉ không được bỏ trống!');
		return false;
	}
	
	if(em=='')
	{
		alert('Email không được bỏ trống!');
		return false;
	}
	
	if(dt=='')
	{
		alert('Điện thoại không được bỏ trống!');
		return false;
	}
	if(!emailRegExp.test(em))
	{
		alert('Địa chỉ email không hợp lệ!');
		return false;
	}
	if(!dtRegExp.test(dt))
	{
		alert('Điện thoại không hợp lệ!');
		return false;
	}
	return true;
}