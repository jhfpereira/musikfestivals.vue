<template>

  <div class="maiwoche">
    <main-header
      :title="header.title"
      :subtitle="header.subtitle"
    ></main-header>

    <content-wrap>
      <content-section>
        <h2>Osnabrücker Maiwoche</h2>
        <copytext>
          Die Osnabrücker Maiwoche ist eine Kombination aus kostenlosem Musikfestival und
          Volksfest. Sie zählt zu den besucherstärksten Volksfesten Norddeutschlands.
          Die erste Maiwoche fand 1972 statt.
        </copytext>

        <copytext>
          Das Fest findet grundsätzlich komplett im Monat Mai statt. Die Dauer der Maiwoche beträgt
          mindestens 10 Tage, kann jedoch bei günstiger Lage von Feiertagen (z. B. Christi
          Himmelfahrt und Pfingsten) bis zu 12 Tage betragen. Während der Veranstaltung
          treten auf verschiedenen Bühnen, die über die gesamte Osnabrücker Innenstadt verteilt
          sind, Musikgruppen und Künstler unterschiedlicher Musikgenres auf.
          Dazu gehören auch national oder international bekannte Interpreten, wie Die Happy,
          Spencer Davis Group, die angefahrenen Schulkinder, Lotto King Karl, 4Lyn, Madsen,
          Mickie Krause, Casper oder Pohlmann. Zwischen den Maiwochen-Bühnen sind – ähnlich wie bei
          einem Jahrmarkt – Verkaufsstände aufgestellt. Außerdem gibt es jedes Jahr ein
          großes Kettenkarussell vor dem Osnabrücker Dom. Jeweils parallel zum zweiten Wochenende
          der Maiwoche findet außerdem das Hasestraßenfest statt, welches die Maiwoche mit
          zusätzlichen Bühnen ergänzt. Das Abschlusskonzert der Maiwoche gibt traditionell die
          Osnabrücker Blues Company auf der Marktplatz-Bühne vor dem Rathaus.
        </copytext>

        <h3>Geschichte</h3>
        <copytext>
          Mitinitiator der Osnabrücker Maiwoche war die Osnabrücker Aktien-Brauerei. Im Mai 1972
          wurde durch einen Fassanstich im Beisein von Oberbürgermeister Ernst Weber die erste
          Maiwoche eröffnet.
        </copytext>

        <copytext>
          Die Maiwoche 1980 stand unter dem Motto: „Osnabrück – 1200 Jahre Fortschritt und
          Bewahrung“ unter anderem gab es damals einen Mittelaltermarkt und eine Modellregatta auf
          dem Attersee. Traditionell verteilten damals Blumenmädchen aus der Partnerstadt
          Haarlem Narzissen an die Besucher der Maiwoche. Ein Jahr später war das Motto der
          Maiwoche 1981: „Nachbarn in Europa“. Zu Beginn der Maiwoche gab es ein Konzert in der
          Dominikanerkirche, in der Musiker aus den Partnerstädten auftraten. Auch
          das Plakat zur Maiwoche war Europäisch gehalten in den dort die Flaggen der Länder
          Frankreich, England, Spanien, Portugal, Niederlande, Türkei, Jugoslawien, Italien und
          Polen abgebildet waren. 1982 wurde die Maiwoche unter den Slogan „Ein Platz
          in der Sonne – Osnabrücker helfen“ ausgerichtet. Erlöse aus Aktionen und Verkäufen wurden
          teilweise für gute Zwecke gespendet.
        </copytext>

        <copytext>
          In den letzten Jahren wird vermehrt auf Trends wie hochwertiges Street Food und eine
          größere Auswahl an Biersorten gesetzt. Im Jahr 2016 gaben zwei neue Bühnen auf dem
          Neumarkt und am Ledenhof Premiere. Im Jahr 2018 musste die Maiwoche erstmals
          seit 14 Jahren auf das sogenannte *Maidorf* verzichten, aus Sicherheitsgründen hatte die
          Stadt die Genehmigung für den Fliegenden Bau verweigert. In der mehrstöckigen
          Festzelt-Konstruktion auf dem Platz des Westfälischen Friedens hinter der
          Stadtbibliothek wurde u. a. Livemusik gespielt.
        </copytext>

        <copytext>
          Am letzten Tag der Maiwoche am 19. Mai 2019 fand auf dem Markt vor dem Rathaus die
          Meisterfeier des VfL Osnabrück statt. Dieser war Meister der 3. Fußball-Liga 2018/19
          und stieg damit in die 2. Bundesliga auf.
        </copytext>

        <copytext>
          Aufgrund der Ausbreitung des COVID-19-Pandemie in Deutschland wurde am 11. März 2020
          die 48. Maiwoche welche vom 8. bis 17. Mai stattfinden sollte vorerst abgesagt.
          Eventuell könnte die Maiwoche im September nachgeholt werden.
        </copytext>

        <h3>Gambrinus</h3>

        <copytext>
          Traditionell wird die Osnabrücker Maiwoche durch den Fassanstich eröffnet. Dabei ist
          neben dem Osnabrücker Oberbürgermeister, welcher den Fassanstich vollzieht, der
          Osnabrücker Gambrinus anwesend, dem der erste Schluck Bier des Festes zusteht.
          Die Figur des Osnabrücker Gambrinus ist älter als die Maiwoche und geht aus der
          Geschichte der Osnabrücker Aktien-Bierbrauerei zurück, zu deren hundertjährigem
          Jubiläum er entstand.
        </copytext>
      </content-section>

      <template #aside>
        <recommendations-content-section
          :items="siteRecommendations"
        ></recommendations-content-section>

        <content-section>
          <template #headline>Hörproben von Hans Atom</template>

          <playlist></playlist>
        </content-section>
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
import Copytext from '@/components/Copytext.vue';
import RecommendationsContentSection from '@/components/RecommendationsContentSection.vue';
import Playlist from '@/components/Playlist.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'Maiwoche',

  components: {
    MainHeader,
    ContentWrap,
    ContentSection,
    Copytext,
    RecommendationsContentSection,
    Playlist,
    PageFooter,
  },

  data() {
    return {
      header: {
        title: 'Maiwoche …',
        subtitle: '… ist der Name eines alljährlich stattfindenden Festes, das es sowohl in Osnabrück als auch in Herdecke gibt.',
      },
    };
  },

  computed: {
    siteRecommendations() {
      return this.$store.getters.siteRecommender(this.$route.path);
    },
  },

  created() {
    this.$store.dispatch('loadPlaylist', 'json/songs.json');
  },

  mounted() {
    document.title = 'Musikfestivals: Maiwoche';
  },
};
</script>
