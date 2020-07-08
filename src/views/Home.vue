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
      header: {
        title: 'Musikfestivals',
        subtitle: 'Kleine Übungsaufgabe im Teilmodul Frontend-Development',
      },
      festivalsVisitiorsData: {
        head: [
          {
            title: 'Name',
          },
          {
            title: 'Genre',
            modification: 'is-less-important',
          },
          {
            title: 'Ort',
            modification: 'is-less-important',
          },
          {
            title: 'Besucher',
            modification: 'is-number',
          },
        ],
        body: [
          [
            'Bochum Total',
            'Pop, Rock',
            'Bochum',
            '1.000.000',
          ],
          [
            'Maiwoche',
            'verschiedene Stilrichtungen',
            'Osnabrück',
            '800.000',
          ],
          [
            'Internationales Dixieland Festival Dresden',
            'Jazz',
            'Dresden',
            '500.000',
          ],
          [
            'Schlagermove',
            'Schlager',
            'Hamburg',
            '400.000',
          ],
          [
            'Das Fest',
            'Rock, Pop, Electro, Hip-Hop',
            'Karlsruhe',
            '400.000',
          ],
          [
            'Schlossgrabenfest',
            'Pop, Schlager, Rock',
            'Darmstadt',
            '400.000',
          ],
          [
            'Rock im Park',
            'Rock',
            'Nürnberg',
            '210.000',
          ],
          [
            'Bardentreffen',
            'Folk, Worlsmusik, Rock, Pop, Bühnen- und Straßenmusik',
            'Nürnberg',
            '200.000',
          ],
          [
            'Breminale',
            'Rock, Pop, Jazz, Elektro, Hip-Hop',
            'Bremen',
            '220.000',
          ],
          [
            'Düsseldorfer Jazz-Rally',
            'Jazz',
            'Düsseldorf',
            '300.000',
          ],
        ],
      },
      rankedBiggestFestivalsWorldwide: [
        {
          title: 'Donauinselfest',
          value: '2.800.000',
          modification: 'is-number',
        },
        {
          title: 'Mawazine',
          value: '2.500.000',
          modification: 'is-number',
        },
        {
          title: 'Rock in Rio',
          value: '1.300.000',
          modification: 'is-number',
        },
        {
          title: 'Streetparade',
          value: '1.100.000',
          modification: 'is-number',
        },
        {
          title: 'Bochum Total',
          value: '1.000.000',
          modification: 'is-number',
        },
      ],
    };
  },

  computed: {
    siteRecommendations() {
      console.log(this.$route);
      return this.$store.getters.siteRecommender(this.$route.path);
    },
  },

  mounted() {
    document.title = 'Musikfestivals: Kleine Übungsaufgabe im Teilmodul Frontend-Development';
  },
};
</script>
