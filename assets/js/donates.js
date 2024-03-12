
function donate() {
 document.getElementById("content").innerHTML = `
 

    <div class="vl-method-label">
      <span>DONATES</span>
    </div>

    <input type="text" id="search" onkeyup="searchFunction()" placeholder="Find the address for donations...">



<div class="addresslist">



<div class="address">
    <div id="getalby">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/alby.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Getalby</span>
                    <br>
                    <span class="token" data-content="https://getalby.com/p/vheuel">https://getalby.com/p/vheuel</span>
                </div>
            </div>
            <a href="https://getalby.com/p/vheuel"><i class="fa fa-external-link"></i></a>
        </div>
    </div>
</div>











<div class="address">
    <div id="Bitcoin">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/btc.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Bitcoin</span>
                    <br>
                    <span class="token" data-content="bc1qtdwns4jv5nk8jktaud8yrsdnp3kua4s7wjwenf">bc1qtdwns4jv5nk8jktaud8yrsdnp3kua4s7wjwenf</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('bc1qtdwns4jv5nk8jktaud8yrsdnp3kua4s7wjwenf')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>




<div class="address">
    <div id="Binance">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/bnb.svg" width="30" height="30">
                <div class="ml-2">
                    <span>BNB Beacon Coin</span>
                    <br>
                    <span class="token" data-content="bnb1hh0hvn9556zegah9y7wzrms847r668crws07lv">bnb1hh0hvn9556zegah9y7wzrms847r668crws07lv</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('bnb1hh0hvn9556zegah9y7wzrms847r668crws07lv')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>






<div class="address">
    <div id="BSC">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/bsc.svg" width="30" height="30">
                <div class="ml-2">
                    <span>BNB Smart Chain</span>
                    <br>
                    <span class="token" data-content="0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85">0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>




<div class="address">
    <div id="Ethereum">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/eth.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Ethereum</span>
                    <br>
                    <span class="token" data-content="0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85">0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>






<div class="address">
    <div id="Theter">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/usdt.svg" width="30" height="30">
                <div class="ml-2">
                    <span>USDT (BEP2)</span>
                    <br>
                    <span class="token" data-content="bnb1hh0hvn9556zegah9y7wzrms847r668crws07lv">bnb1hh0hvn9556zegah9y7wzrms847r668crws07lv</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('bnb1hh0hvn9556zegah9y7wzrms847r668crws07lv')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>




<div class="address">
    <div id="Solana">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/sol.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Solana</span>
                    <br>
                    <span class="token" data-content="Bq26xs641jy1G7hcrFRABsaF1rT5YKHRDNFj3xuht6sN">Bq26xs641jy1G7hcrFRABsaF1rT5YKHRDNFj3xuht6sN</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('Bq26xs641jy1G7hcrFRABsaF1rT5YKHRDNFj3xuht6sN')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>




<div class="address">
    <div id="Doge">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/doge.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Doge</span>
                    <br>
                    <span class="token" data-content="DNXLXDEt6sfTWq1enFbnGR7KNs2AEp3muz">DNXLXDEt6sfTWq1enFbnGR7KNs2AEp3muz</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('DNXLXDEt6sfTWq1enFbnGR7KNs2AEp3muz')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>




<div class="address">
    <div id="Ada">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/ada.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Cardano</span>
                    <br>
                    <span class="token" data-content="addr1qyhrf7lkp0hkd54psq38fmn3q5yfe82ljatf5tn3azzz3rzma2eaj2lamz75455ymvsqkrx0yz069dufas85h68xfnsq5yj5n0">addr1qyhrf7lkp0hkd54psq38fmn3q5yfe82ljatf5tn3azzz3rzma2eaj2lamz75455ymvsqkrx0yz069dufas85h68xfnsq5yj5n0</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('addr1qyhrf7lkp0hkd54psq38fmn3q5yfe82ljatf5tn3azzz3rzma2eaj2lamz75455ymvsqkrx0yz069dufas85h68xfnsq5yj5n0')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>





<div class="address">
    <div id="XRP">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/xrp.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Xrp</span>
                    <br>
                    <span class="token" data-content="rwYddQPRSeFhq2i7fTXu5DgQhr4oVPV6iB">rwYddQPRSeFhq2i7fTXu5DgQhr4oVPV6iB</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('rwYddQPRSeFhq2i7fTXu5DgQhr4oVPV6iB')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>







<div class="address">
    <div id="polkadot">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/dot.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Dot</span>
                    <br>
                    <span class="token" data-content="12HsENgnUsdp1dh22rSXVyDTXUijK5ByHns1HSgupSWCwMUL">12HsENgnUsdp1dh22rSXVyDTXUijK5ByHns1HSgupSWCwMUL</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('12HsENgnUsdp1dh22rSXVyDTXUijK5ByHns1HSgupSWCwMUL')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>








<div class="address">
    <div id="tron">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/trx.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Trx</span>
                    <br>
                    <span class="token" data-content="TEtTTyXYx9erJ8SUFvCL6V4uR8ZAAfnHF9">TEtTTyXYx9erJ8SUFvCL6V4uR8ZAAfnHF9</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('TEtTTyXYx9erJ8SUFvCL6V4uR8ZAAfnHF9')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>








<div class="address">
    <div id="polygon">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/matic.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Matic</span>
                    <br>
                    <span class="token" data-content="0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85">0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>








<div class="address">
    <div id="Algorand">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/algo.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Algo</span>
                    <br>
                    <span class="token" data-content="AMKFJ4T7C7V4RI6DCKTNKZT7UWE2WDCSFGEB4Y7Y5FNXJ7HNEGRQVZJOBM">AMKFJ4T7C7V4RI6DCKTNKZT7UWE2WDCSFGEB4Y7Y5FNXJ7HNEGRQVZJOBM</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('AMKFJ4T7C7V4RI6DCKTNKZT7UWE2WDCSFGEB4Y7Y5FNXJ7HNEGRQVZJOBM')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>








<div class="address">
    <div id="stellar">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/xlm.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Xlm</span>
                    <br>
                    <span class="token" data-content="GC2COQR7E6WY64U5OI2FCHDVOIQABYBLE7424HPVC2OEAIPB5KHIZWMX">GC2COQR7E6WY64U5OI2FCHDVOIQABYBLE7424HPVC2OEAIPB5KHIZWMX</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('GC2COQR7E6WY64U5OI2FCHDVOIQABYBLE7424HPVC2OEAIPB5KHIZWMX')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>






<div class="address">
    <div id="uniswap">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/uni.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Uni (ERC20)</span>
                    <br>
                    <span class="token" data-content="0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85">0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>








<div class="address">
    <div id=Avalanche">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/avax.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Avax</span>
                    <br>
                    <span class="token" data-content="0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85">0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>









<div class="address">
    <div id="usdc">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/usdc.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Usdc (ERC20)</span>
                    <br>
                    <span class="token" data-content="0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85">0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85</span>
                </div>
            </div>
            <span class="copy" onclick="copyToClipboard('0x6Be77F8f492F4Dd5c7432624e990bd1789CecB85')"><i class="fa fa-copy"></i></span>
        </div>
    </div>
</div>








<div class="address">
    <div id="buymecoffee">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/buymecoffee.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Buy Me Coffee</span>
                    <br>
                    <span class="token" data-content="https://www.buymeacoffee.com/vheuel">
https://www.buymeacoffee.com/vheuel
</span>
                </div>
            </div>
            <a href="https://www.buymeacoffee.com/vheuel"><i class="fa fa-external-link"></i></a>
        </div>
    </div>
</div>





<div class="address">
    <div id="liberapay">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/liberapay.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Liberapay</span>
                    <br>
                    <span class="token" data-content="https://liberapay.com/vheuel/donate">https://liberapay.com/vheuel/donate</span>
                </div>
            </div>
            <a href="https://liberapay.com/vheuel/donate"><i class="fa fa-external-link"></i></a>
        </div>
    </div>
</div>






<div class="address">
    <div id="ko-fi">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/ko-fi.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Ko-fi</span>
                    <br>
                    <span class="token" data-content="https://ko-fi.com/vheuel">https://ko-fi.com/vheuel</span>
                </div>
            </div>
            <a href="https://ko-fi.com/vheuel"><i class="fa fa-external-link"></i></a>
        </div>
    </div>
</div>








<div class="address">
    <div id="patreon">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="/assets/img/svg/patreon.svg" width="30" height="30">
                <div class="ml-2">
                    <span>Patreon</span>
                    <br>
                    <span class="token" data-content="https://www.patreon.com/vheuel">https://www.patreon.com/vheuel</span>
                </div>
            </div>
            <a href="https://www.patreon.com/vheuel"><i class="fa fa-external-link"></i></a>
        </div>
    </div>
</div>


</div>





  `;

}
