# Guide de Configuration Stripe + Supabase

## 🔧 Configuration Stripe

### 1. Créer un compte Stripe
1. Allez sur [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)
2. Créez votre compte avec vos informations
3. Vérifiez votre email

### 2. Récupérer les clés API
1. Connectez-vous au [Dashboard Stripe](https://dashboard.stripe.com)
2. Allez dans **Développeurs** > **Clés API**
3. Copiez la **Clé publiable** (commence par `pk_test_`)
4. Révélez et copiez la **Clé secrète** (commence par `sk_test_`)

### 3. Configurer les webhooks
1. Dans le Dashboard Stripe, allez dans **Développeurs** > **Webhooks**
2. Cliquez sur **Ajouter un endpoint**
3. URL de l'endpoint : `https://votre-projet.supabase.co/functions/v1/webhook`
4. Sélectionnez ces événements :
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Cliquez sur **Ajouter un endpoint**
6. Copiez le **Secret de signature** (commence par `whsec_`)

## 🗄️ Configuration Supabase

### 1. Créer un projet Supabase
1. Allez sur [https://supabase.com](https://supabase.com)
2. Cliquez sur **Start your project**
3. Créez un nouveau projet
4. Choisissez un nom et un mot de passe pour la base de données

### 2. Récupérer les clés API
1. Dans votre projet Supabase, allez dans **Settings** > **API**
2. Copiez l'**URL du projet**
3. Copiez la **clé anon/public**
4. Copiez la **clé service_role** (gardez-la secrète !)

### 3. Exécuter les migrations
1. Dans Supabase, allez dans **SQL Editor**
2. Créez une nouvelle requête
3. Copiez le contenu du fichier `supabase/migrations/20250708060359_silent_island.sql`
4. Exécutez la requête

### 4. Déployer les fonctions Edge
1. Installez la CLI Supabase : `npm install -g supabase`
2. Connectez-vous : `supabase login`
3. Liez votre projet : `supabase link --project-ref VOTRE_REF_PROJET`
4. Déployez les fonctions : `supabase functions deploy`

## 🔐 Configuration des variables d'environnement

Mettez à jour le fichier `.env` avec vos vraies valeurs :

```env
# Remplacez par vos vraies clés Stripe
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_PUBLIQUE
STRIPE_SECRET_KEY=sk_test_VOTRE_CLE_SECRETE
STRIPE_WEBHOOK_SECRET=whsec_VOTRE_SECRET_WEBHOOK

# Remplacez par vos vraies valeurs Supabase
VITE_SUPABASE_URL=https://VOTRE_PROJET.supabase.co
VITE_SUPABASE_ANON_KEY=VOTRE_CLE_ANON
SUPABASE_SERVICE_ROLE_KEY=VOTRE_CLE_SERVICE_ROLE
```

## 🧪 Test de l'intégration

### Cartes de test Stripe
Utilisez ces numéros de carte pour tester :

- **Succès** : `4242 4242 4242 4242`
- **Échec** : `4000 0000 0000 0002`
- **3D Secure** : `4000 0025 0000 3155`

Date d'expiration : n'importe quelle date future (ex: 12/25)
CVV : n'importe quel code à 3 chiffres (ex: 123)

### Vérification
1. Testez un paiement dans votre application
2. Vérifiez dans Stripe Dashboard > **Paiements**
3. Vérifiez dans Supabase > **Table Editor** > **subscriptions**

## 🚀 Mise en production

### Stripe
1. Activez votre compte Stripe (vérification d'identité)
2. Remplacez les clés de test par les clés de production
3. Mettez à jour l'URL du webhook

### Supabase
1. Configurez les politiques RLS appropriées
2. Supprimez les politiques "anonymous" si nécessaire
3. Configurez l'authentification

## 📞 Support

Si vous rencontrez des problèmes :
- Documentation Stripe : [https://stripe.com/docs](https://stripe.com/docs)
- Documentation Supabase : [https://supabase.com/docs](https://supabase.com/docs)
- Support Stripe : [https://support.stripe.com](https://support.stripe.com)