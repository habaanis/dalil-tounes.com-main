# 🗄️ Configuration Supabase - Établissements sur Carte

## 🎯 OBJECTIF
Afficher tous vos établissements de la base de données Supabase sur la carte interactive

---

## ✅ ÉTAPE 1 : Exécuter la migration des établissements

### 1.1 Accès à l'éditeur SQL Supabase

1. **Allez sur** : https://supabase.com/dashboard
2. **Sélectionnez votre projet** Dalil Tounes
3. **Cliquez sur "SQL Editor"** dans la sidebar
4. **Cliquez sur "New query"**

### 1.2 Exécution de la migration

1. **Copiez** le contenu du fichier `supabase/migrations/create_establishments_table.sql`
2. **Collez-le** dans l'éditeur SQL
3. **Cliquez sur "Run"** (ou Ctrl+Enter)

✅ **Résultat attendu** : Table `establishments` créée avec données d'exemple

---

## ✅ ÉTAPE 2 : Vérification de la table

### 2.1 Vérifier la création

1. **Allez dans "Table Editor"**
2. **Vous devriez voir** la table `establishments`
3. **Cliquez dessus** pour voir les colonnes :
   - `id`, `name`, `category`, `subcategory`
   - `address`, `governorate`, `phone`
   - `latitude`, `longitude` (coordonnées GPS)
   - `verified`, `premium`, etc.

### 2.2 Données d'exemple

Vous devriez voir 5 établissements d'exemple :
- Hôpital Charles Nicolle
- Restaurant Dar El Jeld  
- Mairie de Tunis
- Clinique Pasteur
- Café des Nattes

---

## ✅ ÉTAPE 3 : Ajouter vos propres établissements

### 3.1 Via l'interface Supabase

1. **Dans Table Editor** → **establishments**
2. **Cliquez sur "Insert row"**
3. **Remplissez les champs** :
   - `name` : Nom de l'établissement
   - `category` : hotel, sante, alimentation, etc.
   - `subcategory` : Type spécifique
   - `address` : Adresse complète
   - `governorate` : tunis, sousse, sfax, etc.
   - `phone` : Numéro de téléphone
   - `latitude` / `longitude` : Coordonnées GPS
4. **Cliquez sur "Save"**

### 3.2 Obtenir les coordonnées GPS

**Pour chaque établissement** :
1. **Google Maps** : Clic droit sur l'emplacement → Copier les coordonnées
2. **Format** : Latitude (36.8065), Longitude (10.1815)

---

## ✅ ÉTAPE 4 : Test de l'affichage

### 4.1 Variables d'environnement

Assurez-vous que ces variables sont configurées sur Netlify :
```
VITE_SUPABASE_URL = https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
GOOGLE_MAPS_API_KEY = AIzaSyANJrHS7OFU12UiLgtPIliTGgVVNrQKTug
```

### 4.2 Redéploiement

1. **Netlify** → **Deploys** → **Trigger deploy**
2. **Attendez** 2-3 minutes
3. **Testez** : https://www.dalil-tounes.com

---

## 🗺️ RÉSULTAT FINAL

Votre site affichera :
- ✅ **Tous vos établissements** Supabase sur la carte
- ✅ **Marqueurs interactifs** avec détails
- ✅ **Navigation GPS** vers chaque établissement
- ✅ **Recherche** dans vos vraies données
- ✅ **Filtres** sur vos établissements
- ✅ **Nouvelles suggestions** ajoutées directement à Supabase

---

## 📊 AVANTAGES SUPABASE vs AIRTABLE

### ✅ **Supabase** :
- 🚀 **Plus rapide** (base de données PostgreSQL)
- 🔒 **Plus sécurisé** (RLS, politiques)
- 🆓 **Gratuit** jusqu'à 500MB
- 🔍 **Recherche avancée** (SQL)
- 📊 **Scalable** pour des milliers d'établissements

### 📋 **Structure recommandée** :
- **Colonnes obligatoires** : name, category, address, phone, latitude, longitude
- **Colonnes optionnelles** : email, website, services, rating, verified

---

## 🆘 DÉPANNAGE

### "Table non créée"
- Vérifiez que la migration s'est exécutée sans erreur
- Rafraîchissez la page Table Editor

### "Aucun établissement affiché"
- Vérifiez vos variables d'environnement Netlify
- Regardez la console du navigateur (F12)
- Vérifiez que la table contient des données

### "Erreur de coordonnées"
- Format : Latitude (36.8065), Longitude (10.1815)
- Utilisez des points (.) pas des virgules (,)

---

**🚀 Votre carte affichera tous vos établissements Supabase !**