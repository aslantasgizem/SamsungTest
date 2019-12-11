<template>

<div class="üstmobil">
  <h5 style="color:darkblue; font-weight: bold;"><a href="code.html" class="anasayfayazisi" style="margin-left: 60px; color:#372f2b; font-family:Arial, Helvetica, sans-serif; font-size: 13px;" > Anasayfa / </a> ÖNE ÇIKAN MOBİL ÜRÜNLER</h5>
  <h1 style="margin-left: 420px; margin-top: 70px; font-weight: bold;"> ÖNE ÇIKAN MOBİL ÜRÜNLER</h1>
</div>
<h4 style="margin-left: 35px; margin-top: 50px;">KATEGORİLER</h4> 
 
  <hr style="width: 25%; margin-left:-950px;">
  <b><p style="margin-top:-70px; margin-left: 400px;">47 </p></b>
  <p style="margin-top:-52px; margin-left: 425px;">Ürün Var </p>


  <!-- Sıralama Filtresi -->
  <div id="app9">
      <Dropdown
       :options="options"
       v-on:selected="validateSelection"
       v-on:filter="getDropdownValues"
       :disabled="false"
       placeholder="Sırala                                                         > ">
     </Dropdown>
     <br />
   </div>

</template>

<style>

</style>

