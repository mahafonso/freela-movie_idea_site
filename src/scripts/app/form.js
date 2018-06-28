$(document).ready(function () {    
    $('.href-agendar-visita').on('click.enviaformulario',(function() {
           var tipo = $(this).parent().parent();
           var tag_label = 'fale-conosco';
           //alert(tipo.attr('id'));
           if (tipo.attr('id') == 'form-contato') {
                tag_label = 'fale-conosco/';
           } else {
                tag_label = 'seja-um-parceiro/';
           }

            if ($(tipo).valid()) {
                $(tipo).submit(function(e)
                {
                    $('#formulario-tabs,#formulario').css('display','none');
                    $('#form-feedback').removeClass('hidden');
                    var postData = $(this).serializeArray();
                    var formURL = $(this).attr('action');
                    $.ajax(
                    {
                        url : formURL,
                        type: 'POST',
                        data : postData,
                        beforeSend: function (){
                            $('.feedback_loading').removeClass('hidden');
                        },
                        success:function(data, textStatus, jqXHR)
                        {
                          $('.feedback_loading').addClass('hidden');
                          if (data == 1) {
                            $('.feedback_sucesso').removeClass('hidden');
                            ga('send', 'event', 'contato','feedback',tag_label+'sucesso-envio');
                          } else {
                            $('.feedback_erro').removeClass('hidden');
                            ga('send', 'event', 'contato','feedback',tag_label+'erro-no-envio');
                          }
                          $('.agendar-visita')[0].reset();
                          //$('#form-parceria')[0].reset();
                        },
                        error: function(jqXHR, textStatus, errorThrown)
                        {
                            $('.feedback_loading').addClass('hidden');
                            $('.feedback_erro').removeClass('hidden');
                            ga('send', 'event', 'contato','feedback',tag_label+'erro-no-envio-bugpagina');
                        }
                    });
                    e.preventDefault(); //STOP default action
                   //e.unbind(); //unbind. to stop multiple form submit.
                });
            }
        $(tipo).submit();
        return false;
        //}
    }));
});