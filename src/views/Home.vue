<template>

  <div class="home">
    <main-header
      :title="header.title"
      :subtitle="header.subtitle"
    ></main-header>

    <content-wrap>
      <content-section>
        <copytext>
          Musikfestivals sind in der Regel jährlich wiederkehrende musikalische Großveranstaltungen.
          Der Begriff „Festival“ ist eng angelehnt an den Begriff „Festspiele“.
          Damit bezeichnet man Veranstaltungen, die sich durch den Ort und ihre Gestaltung aus
          dem Rahmen alltäglich umsetzbarer Konzerte herausheben. Sie zeichnen sich durch ihre
          gesellschaftliche Bedeutung, ihre Größe und durch ihre musikalische Vielfalt aus.
          Festivals verzeichnen heute oftmals hohe Besucherzahlen und können sich über
          einen längeren Zeitraum erstrecken. Sie sind meist auf eine bestimmte Musikrichtung oder
          Interessengruppe ausgerichtet und können fester Bestandteil von Jugendkulturen sein.
        </copytext>

        <copytext>Mittlerweile sind die meisten Musikfestivals Open-Air-Festivals.</copytext>
      </content-section>

      <content-section>
        <template #headline>
          Auflistung aktueller deutscher Festivals mit mindestens 200.000 Besuchern
        </template>

        <info-table :data="festivalsVisitiorsData"></info-table>
      </content-section>

      <content-section>
        <template #headline>
          Die {{ rankedBiggestFestivalsWorldwide.length }} größten Festivals weltweit
        </template>
        <template #subtitle>gemessen an der Besucherzahl</template>

        <ranking :items="rankedBiggestFestivalsWorldwide"></ranking>

        <copytext>
          Gerade bei Festivals, die eine sehr hohe Besucherzahl aufweisen, wurden die Besucher
          pro Bühnenevent gezählt und nicht die Gesamtanzahl an Personen, die an dem Festival
          teilgenommen haben. Es ist darauf hinzuweisen, dass manche Festivalveranstalter die
          Gesamtzahl als "alle Tagesbesucher zusammenaddiert" angeben und damit größer erscheinen
          als manche klassischen großen Rockfestivals, die lediglich die Gesamtzahl der verkauften
          Mehrtagestickets angeben.
        </copytext>
      </content-section>

      <template #aside>
        <recommendations-content-section
          :items="siteRecommendations"
        ></recommendations-content-section>
      </template>
    </content-wrap>

    <page-footer></page-footer>
  </div>

</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import ContentWrap from '@/components/ContentWrap.vue';
import ContentSection from '@/components/ContentSection.vue';
import InfoTable from '@/components/InfoTable.vue';
import Ranking from '@/components/Ranking.vue';
import Copytext from '@/components/Copytext.vue';
import RecommendationsContentSection from '@/components/RecommendationsContentSection.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'Home',

  components: {
    MainHeader,
    ContentWrap,
    ContentSection,
    InfoTable,
    Ranking,
    Copytext,
    RecommendationsContentSection,
    PageFooter,
  },

  data() {
    return {
      pageTitle: 'Musikfestivals: Kleine Übungsaufgabe im Teilmodul Frontend-Development',
      header: {
        title: 'Musikfestivals',
        subtitle: 'Kleine Übungsaufgabe im Teilmodul Frontend-Development',
      },
    };
  },

  computed: {
    siteRecommendations() {
      return this.$store.getters.siteRecommender(this.$route.path);
    },

    festivalsVisitiorsData() {
      return this.$store.state.festivalsVisitiors;
    },

    rankedBiggestFestivalsWorldwide() {
      return this.$store.state.rankedBiggestFestivalsWorldwide;
    },
  },

  mounted() {
    document.title = this.pageTitle;
  },
};
</script>
