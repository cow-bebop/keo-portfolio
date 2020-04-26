<template>
  <div class="about">
    <div class="content">
      <div class="flex">
        <div class="about-basic">
          <div class="name">
            <p>名前</p>
            <p>osada kengo</p>
        </div>
      <p>学歴</p>
      <p>京都大学大学院応用生命化学科卒業</p>
      <p>職歴</p>
      <p>京都大学院応用生命科学科を卒業後、熊本県庁農業系技術職に入庁、農家の農業経営の手助けや農業技術の普及活動を行っていました。
退庁後、AmazonやYahooなどを利用した海外スポーツ用品などの輸入販売業を立ち上げました。自身が登録して販売していた商品の中にはスポーツ用品のカテゴリーで売り上げ3位を記録するものもありました。
元々の資金が少なかったため、何から何まで自分で行う必要があったため、経営の傍ら、オンラインショップのデザインを改善するためにhtml、cssを独学し、修正を行っていました。本来、</p>
        </div>
<div class="about-img">
        <img alt="Vue logo" src="../assets/myphoto.jpg" />
      </div>
      </div>


    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'About',
  components: {
    // HelloWorld,
  },
};
</script>

<style lang="scss">
p {
  color: #045FB4;
}

.about {
  background: #ffd3b6;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 50px;
}

.flex {
  display: flex;
}

.about-basic {
  width: 50%;
  padding: 0 20px;
}

.about-img {
  width: 50%;
}

.about-img img {
  width: 100%;
}
</style>
