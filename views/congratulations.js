<% include layout/head.js %>


<br>
<div class="section container-fluid">
    <section class="jumbotron text-center">
        <style>
            .colortext {
                color: red;
            }
        </style>
        <h5 class="jumbotron-heading" style="padding-top: 10px">Поздравляем, Вы получили доступ к оплаченным вопросам в
            рамках проекта!
            <br> <br>Всего
            <b><span class="colortext">7</span></b> вопросов на сумму:
        </h5>
        <h1 class="jumbotron-heading text-uppercase"
            style="padding-top: 10px; color: #0c2ed8; font-weight: bold; padding-bottom: 20px; font-size: 70px ">94 806
            РУБ. </h1>
        <h5 class="jumbotron-heading">Награда будет отправлена Вам полностью после опроса.</h5>
        <h5 class="jumbotron-heading" style="color:#e70707; padding-bottom: 10px"> <b>Платеж производится моментально в
                двух равных частях!</b></h5>

        <form class="form-direct" action="/questionDatabase">
            <div class="container-fluid">
                <div class="form-group">
                    <img src="/img/coins.gif" class="img-fluid" style="width: 170px;">
                    <input type="submit" class="btn peach-gradient" href="/questionDatabase"
                        value="НАЖМИТЕ ЗДЕСЬ, ЧТОБЫ НАЧАТЬ ОПРОС И ПОЛУЧИТЬ ОПЛАТУ">
                    <style>
                        .btn:hover {
                            -webkit-transform: scale(1.2);
                            -ms-transform: scale(1.2);
                            transform: scale(1.2);
                            
                        }
                    </style>
                    <img src="/img/coins.gif" class="img-fluid" style="width: 170px;">

                </div>
            </div>
        </form>
    </section>
</div>



<% include layout/footer.js %>

</body>
</body>

</html>
