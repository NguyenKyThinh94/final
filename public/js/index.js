$(document).ready(function(){
        $("#slides").slidesjs({
            width: 940,
            height: 350,
            navigation: {
                active: false,
                effect: "slide"
            },
            play: {
                active: false,           
                effect: "slide",         
                interval: 3000,
                auto: true,
                swap: true,
                pauseOnHover: false,
                restartDelay: 1000
              }
        })
        $("#resisterBT").click( function(){
            $("#formResiter").show();
            $("#formLongin").hide();
        })
        $("#longinBT").click( function(){
            $("#formResiter").hide();
            $("#formLongin").show();
        })
        $("#formLongin").validate({
            rules: {
                name: {
                    required: true,
                },
                password: {
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "Không để trống mục này !",
                },
                password: {
                    required: "Không để trống mục này !",
                },
            }
        })
        $("#formResiter").validate({
            rules: {
                name: {
                    required: true,
                },
                password: {
                    required: true,
                    minlength: 5,
                    maxlength: 20,
                },
                repassword: {
                    required: true,
                    equalTo: '#password'
                },
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Không để trống mục này !",
                },
                password: {
                    required: "Không để trống mục này !",
                    minlength: "Nhập tối thiểu 5 ký tự",
                    maxlength: "Nhập tối đa 20 ký tự",
                },
                repassword: {
                    required: "Không để trống mục này !",
                    equalTo: 'Phải nhập giống với mục password'
                },
                email: {
                    required: "Không để trống mục này !",
                    email: "Nhập đúng định dạng",
                },
            }
        })
  });